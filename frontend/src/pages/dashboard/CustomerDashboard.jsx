import DashboardLayout from "../../layouts/DashboardLayout";

import WelcomeBanner from "../../components/dashboard/WelcomeBanner";
import StatCard from "../../components/common/StatCard";
import MembershipCard from "../../components/dashboard/MembershipCard";

import { overviewCards } from "../../data/dashboard/dashboardData";
import ProfileSummary from "../../components/dashboard/ProfileSummary";
import UpcomingClasses from "../../components/dashboard/UpcomingClasses";
import QuickActions from "../../components/dashboard/QuickAction";
import WorkoutTips from "../../components/dashboard/WorkoutTips";
import RecentActivity from "../../components/dashboard/RecentActivity";
import TodayProgress from "../../components/dashboard/TodayProgress";

const CustomerDashboard = () => {
  return (
    <DashboardLayout>
      <WelcomeBanner />

      {/* Stats */}

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

      <div className="mt-8 grid gap-8 xl:grid-cols-[2fr_1fr]">
        {/* Left Side */}

        <div className="space-y-8">
          <MembershipCard />
          <UpcomingClasses />
          <TodayProgress />
        </div>

        {/* Right Side */}

        <div className="space-y-8">
          <ProfileSummary />
          <QuickActions />
          <WorkoutTips />
        </div>
      </div>

      {/* Activity Timeline */}
      <section className="mt-8">
        <RecentActivity />
      </section>
    </DashboardLayout>
  );
};

export default CustomerDashboard;
