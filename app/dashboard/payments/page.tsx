import { TransactionCard } from "@/components/payments/TransactionCard";
import { Search, Download } from "lucide-react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";

export default function Payments() {
  return (
    <DashboardLayout
      header="Payments"
      subheading="Track and manage all payments from your portfolios"
    >
      <form className="flex flex-wrap gap-3">
        <div className="flex-1  bg-surface-1 border border-solid border-slate-800 rounded-xl flex items-center gap-2 px-4 py-2">
          <Search />
          <input type="text" placeholder="Search portfolios..." />
        </div>

        <div className="flex gap-3">
          <select className="bg-surface-1 border border-solid border-slate-800 rounded px-2 py-1 outline-none rounded-xl">
            <option value="all">All Blocks</option>
            <option value="draft">Freelance Services</option>
            <option value="published">Design Consultation</option>
          </select>

          <select className="bg-surface-1 border border-solid border-slate-800 rounded px-2 py-1 outline-none rounded-xl">
            <option value="all">All status</option>
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex flex-col gap-2 border border-solid border-slate-800 p-4 rounded-xl bg-surface-1">
          <div className="text-xl font-semibold">$2,798</div>
          <div className="text-secondary">Total Earnings</div>
        </div>

        <div className="flex flex-col gap-2 border border-solid border-slate-800 p-4 rounded-xl bg-surface-1">
          <div className="text-xl font-semibold">10</div>
          <div className="text-secondary">Total Payments</div>
        </div>

        <div className="flex flex-col gap-2 border border-solid border-slate-800 p-4 rounded-xl bg-surface-1">
          <div className="text-xl font-semibold">7</div>
          <div className="text-secondary">Successful</div>
        </div>

        <div className="flex flex-col gap-2 border border-solid border-slate-800 p-4 rounded-xl bg-surface-1">
          <div className="text-xl font-semibold">1</div>
          <div className="text-secondary">Pending</div>
        </div>
      </div>

      <div className="flex flex-col gap-4 bg-surface-1 p-4 rounded-xl border border-solid border-slate-800">
        <div className="flex justify-between">
          <div>
            <h3 className="text-2xl font-semibold">Freelance Services</h3>
            <div className="text-secondary text-sm">
              5 payments • $798 earned
            </div>
          </div>
          <div className="inline-flex gap-1 items-center text-secondary text-md">
            <Download size={18} />
            Export
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <TransactionCard
            amount={200}
            status="pending"
            clientName="Sarah Johnson"
            date="2023-10-10 14:22"
            description="Website redesign project - first milestone"
          />
          <TransactionCard
            amount={200}
            status="failed"
            clientName="Sarah Johnson"
            date="2023-10-10 14:22"
            description="Website redesign project - first milestone"
          />
          <TransactionCard
            amount={200}
            status="success"
            clientName="Sarah Johnson"
            date="2023-10-10 14:22"
            description="Website redesign project - first milestone"
          />
        </div>
      </div>
    </DashboardLayout>
  );
}
