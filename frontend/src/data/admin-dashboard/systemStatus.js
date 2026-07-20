import { Database, Server, Mail, HardDrive } from "lucide-react";

export const systemStatus = [
  {
    id: 1,
    title: "Database",
    status: "Online",
    icon: Database,
    color: "text-lime-400",
    bg: "bg-lime-400/10",
  },
  {
    id: 2,
    title: "Backend Server",
    status: "Running",
    icon: Server,
    color: "text-sky-400",
    bg: "bg-sky-400/10",
  },
  {
    id: 3,
    title: "Email Service",
    status: "Connected",
    icon: Mail,
    color: "text-orange-400",
    bg: "bg-orange-400/10",
  },
  {
    id: 4,
    title: "Storage",
    status: "72% Used",
    icon: HardDrive,
    color: "text-pink-400",
    bg: "bg-pink-400/10",
  },
];
