import { useEffect, useState } from "react";
import { Bell, Menu } from "lucide-react";

import { getMyMembershipRegistrations } from "../../services/membershipRegistration.service";

const Topbar = ({ onMenuClick }) => {
  const [membershipName, setMembershipName] = useState("No Active Membership");

  const storedUser = localStorage.getItem("user");

  const user = storedUser ? JSON.parse(storedUser) : null;

  const displayName = user?.fullName || user?.name || "User";

  const userRole = user?.role || "customer";

  useEffect(() => {
    if (userRole !== "customer") return;

    const fetchMembership = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) return;

        const response = await getMyMembershipRegistrations(token);

        const registrations = response.data || [];

        const activeMembership = registrations.find(
          (registration) => registration.membershipStatus === "Active",
        );

        if (activeMembership?.membershipPlan) {
          setMembershipName(`${activeMembership.membershipPlan.title} Membership`);
        } else {
          setMembershipName("No Active Membership");
        }
      } catch (error) {
        console.error("Failed to fetch membership:", error);

        setMembershipName("No Active Membership");
      }
    };

    fetchMembership();
  }, [userRole]);

  const getUserSubtitle = () => {
    if (userRole === "admin") {
      return "Admin Portal";
    }

    return membershipName;
  };

  return (
    <header className="sticky top-0 z-30 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-xl">
      <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Left */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onMenuClick}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-200 transition hover:border-lime-400 hover:text-lime-400 lg:hidden"
            aria-label="Toggle sidebar"
          >
            <Menu size={18} />
          </button>

          <div>
            <h1 className="text-xl font-bold text-white sm:text-2xl">
              Dashboard
            </h1>

            <p className="text-sm text-zinc-400">Welcome back 👋</p>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Notification */}
          <button
            type="button"
            className="hidden rounded-xl border border-zinc-800 p-3 transition hover:border-lime-400 sm:inline-flex"
          >
            <Bell size={18} className="text-zinc-300" />
          </button>

          {/* User */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-lime-400/50 bg-lime-400/10 text-sm font-semibold text-lime-400">
              {displayName.charAt(0).toUpperCase()}
            </div>

            <div className="hidden max-w-[180px] sm:block">
              <h3 className="truncate font-semibold text-white">
                {displayName}
              </h3>

              <p className="truncate text-xs text-zinc-500">
                {getUserSubtitle()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
