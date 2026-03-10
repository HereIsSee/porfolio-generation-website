import {
  Folders,
  Eye,
  FileText,
  DollarSign,
  Plus,
  Globe,
  SquarePen,
  SquareArrowOutUpRight,
  Trash2,
  Clock,
  Clock2,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
export default function Login() {
  return (
    <div className="flex flex-col gap-8 p-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold text-primary">
          Welcome back, UserName
        </h1>
        <p className="text-secondary">
          Here&apos;s what&apos;s happening with your portfolios today
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex flex-col gap-2 border border-solid border-slate-800 p-4 rounded-xl bg-surface-1">
          <Folders />
          <div className="text-xl font-semibold">2</div>
          <div className="text-secondary">Total Portfolios</div>
        </div>

        <div className="flex flex-col gap-2 border border-solid border-slate-800 p-4 rounded-xl bg-surface-1">
          <Eye />
          <div className="text-xl font-semibold">2.1K</div>
          <div className="text-secondary">Total Views</div>
        </div>

        <div className="flex flex-col gap-2 border border-solid border-slate-800 p-4 rounded-xl bg-surface-1">
          <FileText />
          <div className="text-xl font-semibold">3</div>
          <div className="text-secondary">Form submissions</div>
        </div>

        <div className="flex flex-col gap-2 border border-solid border-slate-800 p-4 rounded-xl bg-surface-1">
          <DollarSign />
          <div className="text-xl font-semibold">$244</div>
          <div className="text-secondary">Total Earnings</div>
        </div>
      </div>

      <div className="flex flex-col gap-4 bg-surface-1 p-4 rounded-xl border border-solid border-slate-800">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold">Your Portfolios</h3>
          <Button>
            <Plus />
            New Portfolio
          </Button>
        </div>
        <div className="flex flex-col gap-3">
          <div className="border border-solid border-slate-800 flex flex-col gap-2 bg-background p-4 rounded-xl">
            <div className="flex gap-2">
              <h4 className="text-xl font-semibold">Person Portfolio</h4>
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 text-sm font-medium">
                <Clock2 size={16} />
                Published
              </div>
            </div>
            <div className="grid grid-cols-1 gap-2 sm:flex">
              <div className="inline-flex gap-1 items-center text-secondary text-sm whitespace-nowrap">
                <Globe size={16} />
                jongn-doe.portfolio.com
              </div>
              <div className="inline-flex items-center text-secondary text-sm whitespace-nowrap">
                2 hours ago
              </div>
              <div className="inline-flex gap-1 items-center text-secondary text-sm whitespace-nowrap">
                <Eye size={16} />
                1234
              </div>
            </div>

            <div className="flex gap-2 justify-between">
              <div className="flex gap-2">
                <Button>
                  <SquarePen />
                  Edit
                </Button>
                <Button>
                  <SquareArrowOutUpRight />
                  Preview
                </Button>
              </div>
              <div>
                <Button>
                  <Trash2 />
                  Delete
                </Button>
              </div>
            </div>
          </div>

          <div className="border border-solid border-slate-800 flex flex-col gap-2 bg-background p-4 rounded-xl">
            <div className="flex gap-2">
              <h4 className="text-xl font-semibold">Design Showcase</h4>
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-sm font-medium">
                <Clock size={16} />
                Draft
              </div>
            </div>
            <div className="grid grid-cols-1 gap-2 sm:flex">
              <div className="inline-flex gap-1 items-center text-secondary text-sm whitespace-nowrap">
                <Globe size={16} />
                design-showcase.portfolio.com
              </div>
              <div className="inline-flex items-center text-secondary text-sm whitespace-nowrap">
                2 hours ago
              </div>
              <div className="inline-flex gap-1 items-center text-secondary text-sm whitespace-nowrap">
                <Eye size={16} />
                1234
              </div>
            </div>

            <div className="flex gap-2 justify-between">
              <div className="flex gap-2">
                <Button>
                  <SquarePen />
                  Edit
                </Button>
                <Button>
                  <SquareArrowOutUpRight />
                  Preview
                </Button>
              </div>
              <div>
                <Button>
                  <Trash2 />
                  Delete
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 bg-surface-1 p-4 rounded-xl border border-solid border-slate-800">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold">Recent Payments</h3>
          <button className="text-secondary hover:text-primary duration-200">
            View all
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <div className="border border-solid border-slate-800 flex gap-2 bg-background p-4 rounded-xl">
            <div className="flex justify-center items-center px-2 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
              <DollarSign size={18} />
            </div>
            <div className="w-full">
              <div className="flex justify-between w-full">
                <p className="font-semibold">$244.00</p>
                <p className="text-green-500">Successful</p>
              </div>
              <div className="flex justify-between w-full text-secondary text-sm">
                <div>Client Name</div>
                <div>2 hours ago</div>
              </div>
            </div>
          </div>

          <div className="border border-solid border-slate-800 flex gap-2 bg-background p-4 rounded-xl">
            <div className="flex justify-center items-center px-2 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
              <DollarSign size={18} />
            </div>
            <div className="w-full">
              <div className="flex justify-between w-full">
                <p className="font-semibold">$120.00</p>
                <p className="text-green-500">Successful</p>
              </div>
              <div className="flex justify-between w-full text-secondary text-sm">
                <div>Company Inc.</div>
                <div>8 hours ago</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-solid border-slate-800 flex gap-2 bg-background p-4 rounded-xl">
          <div className="flex justify-center items-center px-2 rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
            <DollarSign size={18} />
          </div>
          <div className="w-full">
            <div className="flex justify-between w-full">
              <p className="font-semibold">$244.00</p>
              <p className="text-red-500">Failed</p>
            </div>
            <div className="flex justify-between w-full text-secondary text-sm">
              <div>Client Name</div>
              <div>16 hours ago</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
