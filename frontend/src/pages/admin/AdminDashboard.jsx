import React from 'react'
import AdminLayout from "../../layouts/AdminLayout";

import { adminOverviewCards } from "../../data/admin-dashboard/adminDashboardData";

import WelcomeBanner from '../../components/admin/WelcomeBanner';
import DashboardCard from '../../components/admin/DashboardCard';
import QuickActions from '../../components/admin/QuickActions';
import RecentRegistrations from '../../components/admin/RecentRegistrations';
import MembershipOverview from '../../components/admin/MembershipOverview';
import RecentEnquiries from '../../components/admin/RecentEnquiries';
import TrainerOverview from '../../components/admin/TrainerOverview';
import SystemStatus from '../../components/admin/SystemStatus';
import RecentActivity from '../../components/admin/RecentActivity';

const AdminDashboard = () => {
  return (
    <>
      <WelcomeBanner />

      <section className="mt-8">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {adminOverviewCards.map((card) => (
            <DashboardCard key={card.id} {...card} />
          ))}
        </div>
      </section>

      <div className="mt-8 grid gap-8 xl:grid-cols-[2fr_1fr]">
        <QuickActions />

        <RecentRegistrations />
      </div>

      <div className="mt-8 grid gap-8 xl:grid-cols-[2fr_1fr]">
        <MembershipOverview />

        <RecentEnquiries />
      </div>

      <div className="mt-8 grid gap-8 xl:grid-cols-[2fr_1fr]">
        <TrainerOverview />

        <SystemStatus />
      </div>

      <div className="mt-8">
        <RecentActivity />
      </div>
    </>
  );
}

export default AdminDashboard
