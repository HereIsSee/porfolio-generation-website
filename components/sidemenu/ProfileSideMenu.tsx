import Link from "next/link";
import { User, Mail, CreditCard, Palette } from "lucide-react";

export default function ProfileSideMenu() {
  return (
    <div className="flex w-full flex-col bg-surface-2 border-b border-slate-800 sm:max-w-[200px] sm:border-b-0 sm:border-r">
      <h2 className="p-4 text-xl font-bold text-primary">Settings</h2>
      <div className="flex flex-col gap-3 p-4 text-secondary">
        <Link
          href="/dashboard/settings/profile"
          className="flex items-center gap-2 hover:text-primary duration-200"
        >
          <User />
          Profile
        </Link>
        <Link
          href="/dashboard/settings/account"
          className="flex items-center gap-2 hover:text-primary duration-200"
        >
          <Mail />
          Account
        </Link>

        <Link
          href="/dashboard/settings/billing"
          className="flex items-center gap-2 hover:text-primary duration-200"
        >
          <CreditCard />
          Billing
        </Link>
        <Link
          href="/dashboard/settings/preferences"
          className="flex items-center gap-2 hover:text-primary duration-200"
        >
          <Palette />
          Preferences
        </Link>
      </div>
    </div>
  );
}
