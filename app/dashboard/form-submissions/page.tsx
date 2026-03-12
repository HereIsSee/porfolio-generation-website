import { Button } from "@/components/ui/Button";
import {
  Plus,
  Search,
  Download,
  User,
  Mail,
  Calendar,
  ChevronRight,
} from "lucide-react";

export default function FormSubmissions() {
  return (
    <div className="flex flex-col gap-4 p-4 max-w-[1000px] mx-auto w-full">
      <div className="flex justify-between">
        <div>
          <div className="text-3xl font-semibold">Form Submissions</div>
          <p className="text-secondary">
            View and manage all form responses from your portfolios
          </p>
        </div>

        <Button>
          <Plus />
          Create Form
        </Button>
      </div>

      <form className="flex gap-3">
        <div className="flex-1 bg-surface-1 border border-solid border-slate-800 rounded-xl flex items-center gap-2 px-4 py-2">
          <Search />
          <input type="text" placeholder="Search portfolios..." />
        </div>

        <select className="bg-surface-1 border border-solid border-slate-800 rounded px-2 py-1 outline-none rounded-xl">
          <option value="all">All status</option>
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>
      </form>

      <div className="flex flex-col gap-4 bg-surface-1 p-4 rounded-xl border border-solid border-slate-800">
        <div className="flex justify-between">
          <div>
            <h3 className="text-2xl font-semibold">Contact Form</h3>
            <div className="text-secondary text-sm">5 submissions</div>
          </div>
          <div className="inline-flex gap-1 items-center text-secondary text-md">
            <Download size={18} />
            Export
          </div>
        </div>

        <div>
          <div className="bg-background p-3 rounded-xl border border-solid border-slate-800 flex items-center gap-4">
            <User />
            <div className="flex flex-col gap-2">
              <div className="font-semibold text-xl">John Doe</div>
              <div className="flex gap-2">
                <div className="inline-flex items-center gap-1 text-secondary text-sm">
                  <Mail size={16} />
                  john.doe@example.com
                </div>
                <div className="inline-flex items-center gap-1 text-secondary text-sm">
                  <Calendar size={16} />
                  2023-10-10
                </div>
              </div>
            </div>

            <ChevronRight className="text-secondary ml-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
