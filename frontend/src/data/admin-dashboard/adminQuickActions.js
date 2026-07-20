import { CreditCard, Users, CalendarDays, MessageSquare } from "lucide-react";

export const adminQuickActions = [
  {
    id: 1,
    title: "Manage Memberships",
    description: "Create, update and remove membership plans.",
    icon: CreditCard,
    path: "/admin/memberships",
    color: "bg-lime-400/10 text-lime-400",
  },
  {
    id: 2,
    title: "Manage Trainers",
    description: "Add trainers and update their profiles.",
    icon: Users,
    path: "/admin/trainers",
    color: "bg-sky-400/10 text-sky-400",
  },
  {
    id: 3,
    title: "Manage Schedule",
    description: "Edit weekly classes and timings.",
    icon: CalendarDays,
    path: "/admin/schedule",
    color: "bg-orange-400/10 text-orange-400",
  },
  {
    id: 4,
    title: "View Enquiries",
    description: "Respond to customer enquiries quickly.",
    icon: MessageSquare,
    path: "/admin/enquiries",
    color: "bg-pink-400/10 text-pink-400",
  },
];
