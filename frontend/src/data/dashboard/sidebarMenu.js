import {
  LayoutDashboard,
  User,
  CreditCard,
  CalendarDays,
  MessageSquare,
  Settings,
  LogOut,
} from "lucide-react";

export const sidebarMenu = [
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
