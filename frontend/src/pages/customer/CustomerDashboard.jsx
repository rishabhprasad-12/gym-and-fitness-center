import { useEffect, useState } from "react";
import { BadgeCheck, CreditCard, CalendarDays, Clock } from "lucide-react";

import WelcomeBanner from "../../components/dashboard/WelcomeBanner";
import StatCard from "../../components/common/StatCard";
import MembershipCard from "../../components/dashboard/MembershipCard";
import ProfileSummary from "../../components/dashboard/ProfileSummary";
import UpcomingClasses from "../../components/dashboard/UpcomingClasses";
import QuickActions from "../../components/dashboard/QuickAction";
import WorkoutTips from "../../components/dashboard/WorkoutTips";
import RecentActivity from "../../components/dashboard/RecentActivity";
import TodayProgress from "../../components/dashboard/TodayProgress";
import { getProfile } from "../../services/auth.service";
import { getCurrentMembershipRegistration } from "../../services/membershipRegistration.service";
import { getClassSchedules } from "../../services/schedule.service";

const CustomerDashboard = () => {
  const [user, setUser] = useState(null);
  const [membership, setMembership] = useState(null);
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboard = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const [profileRes, membershipRes, classesRes] = await Promise.all([
          getProfile(token),
          getCurrentMembershipRegistration(token),
          getClassSchedules(),
        ]);

        setUser(profileRes?.data || null);
        setMembership(membershipRes?.data || null);
        setClasses(classesRes?.data || []);
      } catch (error) {
        console.error("Failed to load customer dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  const overviewCards = [
    {
      id: 1,
      title: "Membership",
      value: membership?.membershipStatus || "No Active Plan",
      icon: BadgeCheck,
    },
    {
      id: 2,
      title: "Current Plan",
      value: membership?.membershipPlan?.title || "Not assigned",
      icon: CreditCard,
    },
    {
      id: 3,
      title: "Upcoming Classes",
      value: String(classes.length || 0),
      icon: CalendarDays,
    },
    {
      id: 4,
      title: "Member Since",
      value: user?.createdAt
        ? new Date(user.createdAt).toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
          })
        : "Recent",
      icon: Clock,
    },
  ];

  const upcomingClasses = classes.slice(0, 3).map((item) => ({
    id: item._id,
    day: item.day,
    className: item.className,
    time: item.startTime,
    trainer: item.trainer?.name || "Coach",
    seats: item.capacity,
    color: "bg-lime-400",
  }));

  if (loading) {
    return (
      <div className="mt-10 text-center text-zinc-400">
        Loading dashboard...
      </div>
    );
  }

  return (
    <>
      <WelcomeBanner name={user?.fullName || user?.name || "Member"} />

      <section className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {overviewCards.map((card) => (
          <StatCard
            key={card.id}
            icon={card.icon}
            value={card.value}
            label={card.title}
          />
        ))}
      </section>

      <section className="mt-8">
        <QuickActions />
      </section>

      <div className="mt-8 grid gap-8 xl:grid-cols-[2fr_1fr]">
        <div className="space-y-8">
          <UpcomingClasses classes={upcomingClasses} />
          {/* <TodayProgress /> */}
          <WorkoutTips />
        </div>

        <div className="space-y-8">
          <MembershipCard membership={membership} />
          <ProfileSummary user={user} membership={membership} />
        </div>
      </div>

      <section className="mt-8">
        <RecentActivity />
      </section>
    </>
  );
};

export default CustomerDashboard;
