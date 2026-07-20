import { Users, CreditCard, CalendarDays, MessageSquare } from "lucide-react";

export const adminOverviewCards = [
  {
    id: 1,
    title: "Total Members",
    value: "1,248",
    icon: Users,
    color: "text-sky-400",
    change: "+12%",
  },
  {
    id: 2,
    title: "Active Plans",
    value: "3",
    icon: CreditCard,
    color: "text-lime-400",
    change: "+2%",
  },
  {
    id: 3,
    title: "Today's Classes",
    value: "12",
    icon: CalendarDays,
    color: "text-orange-400",
    change: "+5%",
  },
  {
    id: 4,
    title: "Pending Enquiries",
    value: "8",
    icon: MessageSquare,
    color: "text-pink-400",
    change: "-3%",
  },
];
