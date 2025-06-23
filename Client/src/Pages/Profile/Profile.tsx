/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState, type FormEvent } from "react";
import api from "../../utils/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ProfileData {
  name: string;
  email: string;
}

const Profile: React.FC = () => {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [newPassword, setNewPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [notLoggedIn, setNotLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await api.get("/user/profile");
        setProfile(res.data);
      } catch (err: any) {
        setNotLoggedIn(true);
        toast.info("You must be logged in to view your profile.");
      }
    };

    fetchProfile();
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const updateData: any = {
        name: profile?.name,
        email: profile?.email,
      };
      if (newPassword) updateData.password = newPassword;

      await api.put("/user/profile", updateData);
      toast.success("Profile updated successfully");
      setNewPassword("");
    } catch (err: any) {
      toast.error(
        err.response?.data?.message ||
          err.response?.data?.error ||
          "Failed to update profile"
      );
    } finally {
      setLoading(false);
    }
  };

  if (notLoggedIn) {
    return (
      <div className="max-w-md mx-auto mt-16 p-6 text-center text-gray-600 bg-white border rounded-md shadow-sm">
        <ToastContainer position="top-right" autoClose={3000} />
        <p className="text-lg">You are not logged in.</p>
        <p className="text-sm mt-2">
          Please <a href="/login" className="text-[#4b2d18] underline">log in</a> to access your profile.
        </p>
      </div>
    );
  }

  if (!profile) return null;

  return (
    <section className="max-w-md mx-auto my-10  bg-white p-6 rounded-md shadow-sm border border-gray-200">
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="mb-6 text-center">
        <h1 className="text-xl text-gray-800 mb-1">Hello, {profile.name}</h1>
        <p className="text-sm text-gray-500">{profile.email}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm text-gray-600 mb-1">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring focus:ring-[#4b2d18]/30"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm text-gray-600 mb-1">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring focus:ring-[#4b2d18]/30"
          />
        </div>

        <div>
          <label htmlFor="new-password" className="block text-sm text-gray-600 mb-1">
            New Password (optional)
          </label>
          <input
            id="new-password"
            type="password"
            placeholder="Leave blank to keep current"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring focus:ring-[#4b2d18]/30"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#4b2d18] text-white py-2 text-sm roun ded-md hover:bg-[#951f1a] transition disabled:opacity-60"
        >
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </form>
    </section>
  );
};

export default Profile;
