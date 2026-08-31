import { useEffect, useMemo, useState } from "react";
import {
  Users,
  CreditCard,
  CalendarDays,
  MessageSquare,
  Dumbbell,
  Activity,
} from "lucide-react";

import WelcomeBanner from "../../components/admin/WelcomeBanner";
import DashboardCard from "../../components/admin/DashboardCard";
import QuickActions from "../../components/admin/QuickActions";
import RecentRegistrations from "../../components/admin/RecentRegistrations";
import MembershipOverview from "../../components/admin/MembershipOverview";
import RecentEnquiries from "../../components/admin/RecentEnquiries";
import TrainerOverview from "../../components/admin/TrainerOverview";
import SystemStatus from "../../components/admin/SystemStatus";
import RecentActivity from "../../components/admin/RecentActivity";
import { getMembershipRegistrations } from "../../services/membershipRegistration.service";
import { getEnquiries } from "../../services/enquiry.service";
import { getTrainers } from "../../services/trainer.service";
import { getMembershipPlans } from "../../services/membershipPlan.service";
import { getClassSchedules } from "../../services/schedule.service";
import { getProfile } from "../../services/auth.service";

const AdminDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState({
    profile: null,
    registrations: [],
    enquiries: [],
    trainers: [],
    plans: [],
    classes: [],
  });

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const token = localStorage.getItem("token");

        const [
          registrationsRes,
          enquiriesRes,
          trainersRes,
          plansRes,
          classRes,
          profileRes,
        ] = await Promise.all([
          getMembershipRegistrations(token),
          getEnquiries(),
          getTrainers(),
          getMembershipPlans(),
          getClassSchedules(),
          token ? getProfile(token) : Promise.resolve({ data: null }),
        ]);

        setDashboardData({
          profile: profileRes?.data || null,
          registrations: registrationsRes?.data || [],
          enquiries: enquiriesRes?.data || [],
          trainers: trainersRes?.data || [],
          plans: plansRes?.data || [],
          classes: classRes?.data || [],
        });
      } catch (error) {
        console.error("Failed to load admin dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  const totalMembers = dashboardData.registrations.length;
  const activePlans = dashboardData.plans.length;
  const pendingRegistrations = dashboardData.registrations.filter(
    (item) => item.membershipStatus === "Pending",
  ).length;
  const pendingEnquiries = dashboardData.enquiries.filter(
    (item) => item.status === "Pending" || item.status === "New",
  ).length;

  const recentRegistrations = dashboardData.registrations
    .slice(0, 5)
    .map((item) => ({
      id: item._id,
      name: item.user?.name || item.user?.fullName || "Customer",
      plan: item.membershipPlan?.title || "Membership",
      joined: new Date(item.createdAt).toLocaleDateString(),
      status: item.membershipStatus || "Pending",
    }));

  const recentEnquiriesData = dashboardData.enquiries
    .slice(0, 5)
    .map((item) => ({
      id: item._id,
      name: item.name || "Customer",
      subject: item.subject || "General enquiry",
      date: new Date(item.createdAt).toLocaleDateString(),
      status: item.status || "New",
    }));

  const membershipOverview = useMemo(() => {
    const total = dashboardData.registrations.length || 1;

    return dashboardData.plans.map((plan, index) => {
      const members = dashboardData.registrations.filter(
        (registration) =>
          registration.membershipPlan?._id === plan._id ||
          registration.membershipPlan?.title === plan.title,
      ).length;

      const percentage = Math.round((members / total) * 100);

      return {
        id: plan._id || index,
        plan: plan.title,
        members,
        percentage: Number.isFinite(percentage) ? percentage : 0,
        color: ["bg-lime-400", "bg-sky-400", "bg-violet-400", "bg-pink-400"][
          index % 4
        ],
      };
    });
  }, [dashboardData.plans, dashboardData.registrations]);

  const trainerOverview = [
    {
      id: 1,
      title: "Total Trainers",
      value: dashboardData.trainers.length,
      color: "text-sky-400",
      icon: Users,
    },
    {
      id: 2,
      title: "Active Classes",
      value: dashboardData.classes.length,
      color: "text-lime-400",
      icon: Dumbbell,
    },
  ];

  const featuredTrainers = dashboardData.trainers
    .slice(0, 4)
    .map((trainer) => ({
      id: trainer._id,
      name: trainer.name,
      role: trainer.specialization,
      experience: `${trainer.experience} yrs`,
    }));

  const adminOverviewCards = [
    {
      id: 1,
      title: "Total Members",
      value: totalMembers.toLocaleString(),
      icon: Users,
      color: "text-sky-400",
      change: "+12%",
    },
    {
      id: 2,
      title: "Active Plans",
      value: String(activePlans),
      icon: CreditCard,
      color: "text-lime-400",
      change: "+2%",
    },
    {
      id: 3,
      title: "Pending Registrations",
      value: String(pendingRegistrations),
      icon: CalendarDays,
      color: "text-orange-400",
      change: "+5%",
    },
    {
      id: 4,
      title: "Pending Enquiries",
      value: String(pendingEnquiries),
      icon: MessageSquare,
      color: "text-pink-400",
      change: "-3%",
    },
  ];

  if (loading) {
    return (
      <div className="mt-10 text-center text-zinc-400">
        Loading dashboard...
      </div>
    );
  }

  return (
    <>
      <WelcomeBanner
        name={
          dashboardData.profile?.fullName ||
          dashboardData.profile?.name ||
          "Administrator"
        }
      />

      <section className="mt-8">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {adminOverviewCards.map((card) => (
            <DashboardCard key={card.id} {...card} />
          ))}
        </div>
      </section>

      <div className="mt-8 grid gap-8 xl:grid-cols-[2fr_1fr]">
        <QuickActions />

        <RecentRegistrations registrations={recentRegistrations} />
      </div>

      <div className="mt-8 grid gap-8 xl:grid-cols-[2fr_1fr]">
        <MembershipOverview plans={membershipOverview} />

        <RecentEnquiries enquiries={recentEnquiriesData} />
      </div>

      <div className="mt-8 grid gap-8 xl:grid-cols-[2fr_1fr]">
        <TrainerOverview
          trainerOverview={trainerOverview}
          featuredTrainers={featuredTrainers}
        />

        <SystemStatus />
      </div>

      <div className="mt-8">
        <RecentActivity />
      </div>
    </>
  );
};

export default AdminDashboard;
