import Image from "next/image";
import PasswordForm from "@/components/settings/account/PasswordForm";
import { CircleAlert, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Account() {
  return (
    <div className="flex flex-col gap-4 p-4 max-w-[800px] mx-auto w-full">
      <div>
        <div className="text-2xl font-semibold">Account</div>
        <p className="text-secondary">
          Manage your account credentials and preferences
        </p>
      </div>

      <PasswordForm />

      <div className="flex flex-col px-6 py-4 gap-2 rounded-lg bg-red-500/10 text-red-400 border border-red-500/20">
        <div className="inline-flex items-center gap-2">
          <CircleAlert size={18} />
          <div className="text-red-300">Delete Account</div>
        </div>

        <div className="text-sm pl-7 text-red-400">
          Permanently delete your account and all associated data. This action
          cannot be undone.
        </div>

        <Button className="w-fit bg-red-500/30 text-red-400 border border-red-500/20">
          <Trash2 size={18} />
          Delete Account
        </Button>
      </div>
    </div>
  );
}
