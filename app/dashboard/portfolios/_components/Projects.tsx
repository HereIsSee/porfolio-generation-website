import { Plus, SquareArrowOutUpRight, Trash2 } from "lucide-react";
import EmptyState from "@/components/shared/EnptyState";
import SectionHeader from "@/components/shared/SectionHeader";

export default function Projects() {
  return (
    <div className="flex flex-col gap-4">
      <SectionHeader
        title="Projects"
        description="Showcase your best work and achievements"
        buttonLabel="Add Project"
        buttonAction={() => {}}
      />

      <EmptyState
        title="No projects yet"
        description="Add your first project to get started"
        buttonLabel="Add Project"
        buttonIcon={<SquareArrowOutUpRight size={32} />}
        buttonAction={() => {}}
      />

      <div className="flex flex-col gap-2 rounded-xl border border-solid border-slate-800 bg-surface-1 p-4">
        <div className="flex gap-2 justify-between items-center">
          <h3 className="text-md font-semibold">Project 1</h3>
          <button className="inline-flex items-center gap-0.5 rounded-xl bg-red-500/10 px-3 py-2 text-red-500 transition-colors hover:bg-red-500/40">
            <Trash2 size={18} />
          </button>
        </div>

        <form className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <label className="text-primary text-sm font-medium" htmlFor="title">
              Title
            </label>

            <input
              type="text"
              id="title"
              placeholder="E-commerce Platform"
              className="rounded-xl border border-slate-800 bg-background p-3 text-primary transition-colors focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-primary text-sm font-medium" htmlFor="title">
              Description
            </label>

            <textarea
              id="description"
              placeholder="Describe the project, technologies used, your role, and key achievements"
              className="rounded-xl min-h-[150px] border border-slate-800 bg-background p-3 text-primary transition-colors focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div className="flex gap-2">
            <div className="flex min-w-0 flex-1 flex-col gap-2">
              <label
                className="text-primary text-sm font-medium"
                htmlFor="title"
              >
                Project URL
              </label>

              <input
                type="text"
                id="projectUrl"
                placeholder="https://example.com"
                className="rounded-xl border border-slate-800 bg-background p-3 text-primary transition-colors focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div className="flex min-w-0 flex-1 flex-col gap-2">
              <label
                className="text-primary text-sm font-medium"
                htmlFor="title"
              >
                Repository URL
              </label>

              <input
                type="text"
                id="repositoryUrl"
                placeholder="https://github.com/user/repo"
                className="rounded-xl border border-slate-800 bg-background p-3 text-primary transition-colors focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
