import EmptyState from "@/components/shared/EnptyState";
import SectionHeader from "@/components/shared/SectionHeader";
import { Briefcase, Trash2 } from "lucide-react";

export default function WorkExperience() {
  return (
    <div className="flex flex-col gap-4">
      <SectionHeader
        title="Work Experience"
        description="Add your professional experience and achievements"
        buttonLabel="Add Experience"
        buttonAction={() => {}}
      />

      <EmptyState
        title="No work experience yet"
        description="Add your first work experience"
        buttonLabel="Add Experience"
        buttonIcon={<Briefcase size={32} />}
        buttonAction={() => {}}
      />

      <div className="flex flex-col gap-2 rounded-xl border border-solid border-slate-800 bg-surface-1 p-4">
        <div className="flex gap-2 justify-between items-center">
          <h3 className="text-md font-semibold">Experience 1</h3>
          <button className="inline-flex items-center gap-0.5 rounded-xl bg-red-500/10 px-3 py-2 text-red-500 transition-colors hover:bg-red-500/40">
            <Trash2 size={18} />
          </button>
        </div>

        <form className="flex flex-col gap-2">
          <div className="flex gap-2">
            <div className="flex min-w-0 flex-1 flex-col gap-2">
              <label
                className="text-primary text-sm font-medium"
                htmlFor="company"
              >
                Company
              </label>

              <input
                type="text"
                id="company"
                placeholder="Acme Inc."
                className="rounded-xl border border-slate-800 bg-background p-3 text-primary transition-colors focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div className="flex min-w-0 flex-1 flex-col gap-2">
              <label
                className="text-primary text-sm font-medium"
                htmlFor="position"
              >
                Position
              </label>

              <input
                type="text"
                id="position"
                placeholder="Senior Developer"
                className="rounded-xl border border-slate-800 bg-background p-3 text-primary transition-colors focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex gap-2">
            <div className="flex min-w-0 flex-1 flex-col gap-2">
              <label
                className="text-primary text-sm font-medium"
                htmlFor="startDate"
              >
                Start Date
              </label>

              <input
                type="date"
                id="startDate"
                placeholder="https://example.com"
                className="rounded-xl border border-slate-800 bg-background p-3 text-primary transition-colors focus:border-blue-500 focus:outline-none [color-scheme:dark]"
              />
            </div>

            <div className="flex min-w-0 flex-1 flex-col gap-2">
              <label
                className="text-primary text-sm font-medium"
                htmlFor="endDate"
              >
                End Date
              </label>

              <input
                type="date"
                id="endDate"
                placeholder="https://github.com/user/repo"
                className="rounded-xl border border-slate-800 bg-background p-3 text-primary transition-colors focus:border-blue-500 focus:outline-none [color-scheme:dark]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-primary text-sm font-medium" htmlFor="title">
              Description
            </label>

            <textarea
              id="description"
              placeholder="Describe your responsibilities, achievements, and the impact you made"
              className="rounded-xl min-h-[150px] border border-slate-800 bg-background p-3 text-primary transition-colors focus:border-blue-500 focus:outline-none"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
