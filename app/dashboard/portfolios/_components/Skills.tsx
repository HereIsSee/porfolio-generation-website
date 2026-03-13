import { Plus, Code, Trash2, X } from "lucide-react";
import EmptyState from "@/components/shared/EnptyState";
import SectionHeader from "@/components/shared/SectionHeader";
import Card from "@/components/ui/Card";

export default function Skills() {
  return (
    <div className="flex flex-col gap-4">
      <SectionHeader
        title="Skills"
        description="Add your technical and professional skills"
        buttonLabel="Add Skill"
        buttonAction={() => {}}
      />
      <EmptyState
        title="No skills yet"
        description="Add your first skill to get started"
        buttonLabel="Add Skill"
        buttonIcon={<Code size={32} />}
        buttonAction={() => {}}
      />

      <Card>
        <div className="flex gap-2 flex-wrap justify-center items-center">
          <input
            type="text"
            placeholder="Label (eg. Twitter)"
            className="flex-1 min-w-0 rounded-xl border border-slate-800 bg-background p-3 text-primary transition-colors focus:border-blue-500 focus:outline-none"
          />

          <input
            type="text"
            placeholder="URL"
            className="flex-1 min-w-0 rounded-xl border border-slate-800 bg-background p-3 text-primary transition-colors focus:border-blue-500 focus:outline-none"
          />

          <button
            type="button"
            className="inline-flex items-center gap-0.5 rounded-xl bg-red-500/10 p-2 text-red-500 transition-colors hover:bg-red-500/40"
          >
            <X />
          </button>
        </div>

        <div className="border border-b border-slate-800 my-2"></div>

        <button
          type="button"
          className="inline-flex items-center gap-0.5 text-blue-500 hover:text-blue-400 transition-colors"
        >
          <Plus />
          <span className="text-sm font-medium">Add Another Skill</span>
        </button>
      </Card>
    </div>
  );
}
