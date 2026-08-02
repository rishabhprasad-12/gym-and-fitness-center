import {
  LayoutDashboard,
  User,
  CreditCard,
  NotebookPen,
  CalendarDays,
  MessageSquare,
  IdCardLanyard,
  CircleQuestionMark,
  Settings,
  LogOut,
} from "lucide-react";

export const customerSidebarMenu = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    title: "My Profile",
    icon: User,
    path: "/dashboard/profile",
  },
  {
    title: "Membership",
    icon: CreditCard,
    path: "/dashboard/membership",
  },
  {
    title: "My Classes",
    icon: CalendarDays,
    path: "/dashboard/classes",
  },
  {
    title: "Support",
    icon: MessageSquare,
    path: "/dashboard/support",
  },
];

export const adminSidebarMenu = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/admin/dashboard",
  },
  {
    title: "Manage Plans",
    icon: NotebookPen,
    path: "/admin/manage-plans",
  },
  {
    title: "Manage Trainers",
    icon: IdCardLanyard,
    path: "/dashboard/manege-trainers",
  },
  {
    title: "Manage Schedule",
    icon: CalendarDays,
    path: "/dashboard/menage-schedule",
  },
  {
    title: "View Enquires",
    icon: CircleQuestionMark,
    path: "/dashboard/view-enquires",
  },
];
 
export const accountMenu = [
  {
    title: "Settings",
    icon: Settings,
    path: "/dashboard/settings",
  },
  {
    title: "Logout",
    icon: LogOut,
    path: "/auth/login",
  },
];
