import EmptyState from "@/components/shared/EnptyState";
import SectionHeader from "@/components/shared/SectionHeader";
import Card from "@/components/ui/Card";
import { GraduationCap, Trash2 } from "lucide-react";

export default function Education() {
  return (
    <div className="flex flex-col gap-4">
      <SectionHeader
        title="Education"
        description="Add your educational background"
        buttonLabel="Add Education"
        buttonAction={() => {}}
      />

      <EmptyState
        title="No education yet"
        description="Add your first education to get started"
        buttonLabel="Add Education"
        buttonIcon={<GraduationCap size={32} />}
        buttonAction={() => {}}
      />

      <Card>
        <div className="flex gap-2 justify-between items-center">
          <h3 className="text-md font-semibold">Education 1</h3>
          <button className="inline-flex items-center gap-0.5 rounded-xl bg-red-500/10 px-3 py-2 text-red-500 transition-colors hover:bg-red-500/40">
            <Trash2 size={18} />
          </button>
        </div>

        <form className="flex flex-col gap-2">
          <div className="flex min-w-0 flex-1 flex-col gap-2">
            <label
              className="text-primary text-sm font-medium"
              htmlFor="institution"
            >
              Institution
            </label>

            <input
              type="text"
              id="institution"
              placeholder="University of Example"
              className="rounded-xl border border-slate-800 bg-background p-3 text-primary transition-colors focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div className="flex gap-2">
            <div className="flex min-w-0 flex-1 flex-col gap-2">
              <label
                className="text-primary text-sm font-medium"
                htmlFor="degree"
              >
                Degree
              </label>

              <input
                type="text"
                id="degree"
                placeholder="Bachelor of Science in Computer Science"
                className="rounded-xl border border-slate-800 bg-background p-3 text-primary transition-colors focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div className="flex min-w-0 flex-1 flex-col gap-2">
              <label
                className="text-primary text-sm font-medium"
                htmlFor="fieldOfStudy"
              >
                Field of Study
              </label>

              <input
                type="text"
                id="fieldOfStudy"
                placeholder="Computer Science"
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
              placeholder="Describe notable achievements, coursework, or activities..."
              className="rounded-xl min-h-[150px] border border-slate-800 bg-background p-3 text-primary transition-colors focus:border-blue-500 focus:outline-none"
            />
          </div>
        </form>
      </Card>
    </div>
  );
}
