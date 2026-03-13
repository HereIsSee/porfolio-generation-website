import EmptyState from "@/components/shared/EnptyState";
import SectionHeader from "@/components/shared/SectionHeader";
import { FileText, ChevronDown, ChevronUp, Trash2, Plus } from "lucide-react";
import Card from "@/components/ui/Card";
export default function CustomForms() {
  return (
    <div className="flex flex-col gap-4">
      <SectionHeader
        title="Custom Forms"
        description="Create custom forms to collect information from your visitors"
        buttonLabel="Add Form"
        buttonAction={() => {}}
      />
      <EmptyState
        title="No Forms yet"
        description="Create custom forms to collect information from your visitors"
        buttonLabel="Add Form"
        buttonIcon={<FileText size={32} />}
        buttonAction={() => {}}
      />

      <div className="flex flex-col gap-2 rounded-xl border border-solid border-slate-800 bg-surface-1">
        <div className="flex gap-2 justify-between items-center bg-surface-3 py-2 px-4 border-b border-slate-800">
          <div className="flex gap-2 justify-between items-center">
            <ChevronUp size={18} />
            <FileText size={18} />

            <div className="text-secondary">
              <input
                type="text"
                placeholder="Form Title"
                className="text-secondary"
              />
              <p className="text-sm">0 fields</p>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <p>toggle</p>
            <button className="inline-flex items-center gap-0.5 rounded-xl bg-red-500/10 px-3 py-2 text-red-500 transition-colors hover:bg-red-500/40">
              <Trash2 size={18} />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2 py-2 px-4">
          <div className="flex gap-2 justify-between items-center">
            <p className="text-sm">Form fields</p>
            <button
              type="button"
              className="inline-flex items-center gap-0.5 text-blue-500 hover:text-blue-400 transition-colors"
            >
              <Plus />
              <span className="text-sm font-medium">Add Field</span>
            </button>
          </div>

          <div className="flex justify-center items-center rounded-xl border-2 border-dashed border-slate-800 p-8">
            <p className="text-secondary text-sm">
              No fields yet. Click &quot;Add Field&quot; to start building your
              form.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 items-center bg-surface-3 rounded-xl border border-solid border-slate-800 p-4">
            <input
              type="text"
              placeholder="Field Label"
              className="flex-1 min-w-30 rounded-md border border-slate-800 bg-background p-2 text-primary transition-colors focus:border-blue-500 focus:outline-none"
            />

            <div className="flex gap-2 items-center">
              <select className="rounded-xl border border-slate-800 bg-background p-2 text-primary transition-colors focus:border-blue-500 focus:outline-none">
                <option value="text">Text</option>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="number">Number</option>
                <option value="textarea">Textarea</option>
                <option value="dropdown">DropDown</option>
              </select>

              <label htmlFor="required" className="flex gap-1">
                <input type="checkbox" />

                <p className="text-sm">Required</p>
              </label>

              <button className="inline-flex items-center gap-0.5 rounded-xl bg-red-500/10 px-3 py-2 text-red-500 transition-colors hover:bg-red-500/40">
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="inline-flex items-center gap-2 rounded-xl border border-solid border-blue-500/20 bg-blue-500/20 px-2 py-1 text-sm text-primary">
        <p className="text-secondary">
          <span className="font-semibold text-primary">Info:</span> Forms can be
          embedded in your portfolio to collect visitor information. Submissions
          will be available in the Form Submissions section.
        </p>
      </div>
    </div>
  );
}
