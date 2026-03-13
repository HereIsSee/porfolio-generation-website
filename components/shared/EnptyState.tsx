import { Plus } from "lucide-react";

type EmptyStateProps = {
  title: string;
  description: string;
  buttonLabel: string;
  buttonIcon: React.ReactNode;
  buttonAction: () => void;
};

export default function EmptyState({
  title,
  description,
  buttonLabel,
  buttonIcon,
  buttonAction,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-solid border-slate-800 bg-surface-1 p-4">
      <div className="flex-shrink-0 rounded-full bg-background p-4">
        {buttonIcon}
      </div>
      <p className="text-primary text-sm font-medium">{title}</p>
      <p className="text-secondary text-sm">{description}</p>

      <button
        onClick={buttonAction}
        className="inline-flex items-center gap-0.5 rounded-xl bg-blue-600 px-3 py-2 text-primary transition-colors hover:bg-blue-600/80"
      >
        <Plus />
        <span className="text-sm font-medium">{buttonLabel}</span>
      </button>
    </div>
  );
}
