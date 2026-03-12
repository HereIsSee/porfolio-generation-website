import {
  DollarSign,
  Clock,
  CircleAlert,
  User,
  Calendar,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

export type TransactionStatus = "pending" | "failed" | "success";

export interface TransactionCardProps {
  amount: number;
  status: TransactionStatus;
  clientName: string;
  date: string;
  description: string;
}

export function TransactionCard({
  amount,
  status,
  clientName,
  date,
  description,
}: TransactionCardProps) {
  return (
    <div className="bg-background p-3 rounded-xl border border-solid border-slate-800 flex items-center gap-4">
      <div
        className={`flex justify-center flex-shrink-0 items-center p-2 rounded-full border border-solid ${
          status === "failed"
            ? "bg-red-500/10 text-red-400 border-red-500/20"
            : status === "pending"
              ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
              : "bg-green-500/10 text-green-400 border-green-500/20"
        }`}
      >
        <DollarSign size={18} />
      </div>

      <div className="flex flex-col gap-2 flex-1 min-w-0">
        <div className="inline-flex gap-2 items-center">
          <div className="font-semibold text-xl">${amount}</div>
          <div
            className={`inline-flex items-center gap-1 px-3 py-1 rounded-full border border-solid text-sm font-medium ${
              status === "failed"
                ? "bg-red-500/10 text-red-400 border-red-500/20"
                : status === "pending"
                  ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
                  : "bg-green-500/10 text-green-400 border-green-500/20"
            }`}
          >
            {status === "pending" && <Clock size={16} />}
            {status === "failed" && <CircleAlert size={16} />}
            {status === "success" && <CheckCircle2 size={16} />}
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </div>
        </div>
        <div className="flex gap-2 min-w-0 items-center">
          <div className="inline-flex flex-shrink-0 items-center gap-1 text-secondary text-sm">
            <User size={16} />
            {clientName}
          </div>
          <div className="inline-flex flex-shrink-0 items-center gap-1 text-secondary text-sm">
            <Calendar size={16} />
            {date}
          </div>
          <div className="text-secondary text-sm truncate">{description}</div>
        </div>
      </div>

      <ChevronRight className="text-secondary ml-auto flex-shrink-0" />
    </div>
  );
}
