import { Plus } from "lucide-react";

type SectionHeaderProps = {
  title: string;
  description: string;
  buttonLabel: string;
  buttonAction: () => void;
};

export default function SectionHeader({
  title,
  description,
  buttonLabel,
  buttonAction,
}: SectionHeaderProps) {
  return (
    <div className="flex justify-between gap-4 items-center">
      <div>
        <h2 className="text-primary text-xl font-semibold">{title}</h2>
        <p className="text-secondary text-sm">{description}</p>
      </div>

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
