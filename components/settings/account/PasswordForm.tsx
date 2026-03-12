"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Eye, EyeOff } from "lucide-react";

export default function PasswordForm() {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <form className="flex flex-col gap-4 bg-surface-1 p-4 rounded-xl border border-solid border-slate-800">
      <div className="flex flex-col gap-2">
        <label className="text-secondary text-sm font-medium">
          Current Password
        </label>

        <div className="relative">
          <input
            type={showCurrent ? "text" : "password"}
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full bg-background border border-slate-800 rounded-xl p-3 pr-10 text-primary focus:outline-none focus:border-blue-500 transition-colors"
          />

          <button
            type="button"
            onClick={() => setShowCurrent(!showCurrent)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary"
          >
            {showCurrent ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-secondary text-sm font-medium">
          New Password
        </label>

        <div className="relative">
          <input
            type={showNew ? "text" : "password"}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full bg-background border border-slate-800 rounded-xl p-3 pr-10 text-primary focus:outline-none focus:border-blue-500 transition-colors"
          />

          <button
            type="button"
            onClick={() => setShowNew(!showNew)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary"
          >
            {showNew ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-secondary text-sm font-medium">
          Confirm New Password
        </label>

        <div className="relative">
          <input
            type={showConfirm ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full bg-background border border-slate-800 rounded-xl p-3 pr-10 text-primary focus:outline-none focus:border-blue-500 transition-colors"
          />

          <button
            type="button"
            onClick={() => setShowConfirm(!showConfirm)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary"
          >
            {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      <Button className="w-fit">Update Password</Button>
    </form>
  );
}
