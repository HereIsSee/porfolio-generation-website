import Link from "next/link";
import {
  LayoutDashboard,
  FolderOpen,
  FileText,
  CreditCard,
  Settings,
} from "lucide-react";

export default function SideMenu() {
  return (
    <div className="flex w-full flex-col gap-4 bg-surface-2 border-b border-slate-800 sm:max-w-[300px] sm:border-b-0 sm:border-r">
      <Link
        href="/"
        className="p-4 text-2xl font-bold text-primary border-b border-solid border-slate-700"
      >
        PortfolioBuilder
      </Link>
      <div className="flex flex-col gap-3 p-4 text-secondary">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 hover:text-primary duration-200"
        >
          <LayoutDashboard />
          Dashboard
        </Link>
        <Link
          href="/dashboard/portfolios"
          className="flex items-center gap-2 hover:text-primary duration-200"
        >
          <FolderOpen />
          Portfolios
        </Link>
        <Link
          href="/dashboard/form-submissions"
          className="flex items-center gap-2 hover:text-primary duration-200"
        >
          <FileText />
          Form Submissions
        </Link>
        <Link
          href="/dashboard/payments"
          className="flex items-center gap-2 hover:text-primary duration-200"
        >
          <CreditCard />
          Payments
        </Link>
        <Link
          href="/dashboard/settings/profile"
          className="flex items-center gap-2 hover:text-primary duration-200"
        >
          <Settings />
          Settings
        </Link>
      </div>
    </div>
  );
}
