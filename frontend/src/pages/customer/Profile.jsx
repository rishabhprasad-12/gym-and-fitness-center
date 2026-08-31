import { useEffect, useState } from "react";
import { User, Mail, Phone, ShieldCheck } from "lucide-react";
import toast from "react-hot-toast";

import api from "../../api/axios";
import { getProfile } from "../../services/auth.service";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await getProfile(token);

      setUser(response.data);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to load profile");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-zinc-500">Loading profile...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-zinc-500">Unable to load profile.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Header */}

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">My Profile</h1>

        <p className="mt-2 text-zinc-500">
          Manage and view your account information.
        </p>
      </div>

      {/* Profile Card */}

      <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
        {/* Profile Header */}

        <div className="border-b border-zinc-800 bg-zinc-950 px-6 py-8">
          <div className="flex items-center gap-5">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-lime-400 text-2xl font-bold text-black">
              {(user.fullName || user.name || "U").charAt(0).toUpperCase()}
            </div>

            <div>
              <h2 className="text-xl font-bold text-white">
                {user.fullName || user.name || "User"}
              </h2>

              <p className="mt-1 text-sm text-zinc-500">FitForge Member</p>
            </div>
          </div>
        </div>

        {/* Information */}

        <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2">
          <ProfileItem
            icon={User}
            label="Full Name"
            value={user.fullName || user.name}
          />

          <ProfileItem icon={Mail} label="Email" value={user.email} />

          <ProfileItem
            icon={Phone}
            label="Phone"
            value={user.phone || "Not provided"}
          />

          <ProfileItem
            icon={ShieldCheck}
            label="Account Role"
            value={user.role || "Customer"}
          />
        </div>
      </div>
    </div>
  );
};

const ProfileItem = ({ icon: Icon, label, value }) => {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-900">
          <Icon size={18} className="text-lime-400" />
        </div>

        <div className="min-w-0">
          <p className="text-xs text-zinc-500">{label}</p>

          <p className="mt-1 truncate text-sm font-medium text-white">
            {value || "-"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
