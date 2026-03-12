import Image from "next/image";
import { Button } from "@/components/ui/Button";
import {
  Plus,
  Search,
  List,
  Grid3x3,
  Globe,
  Eye,
  SquareArrowOutUpRight,
  EllipsisVertical,
} from "lucide-react";

export default function Portfolios() {
  return (
    <div className="flex flex-col gap-4 p-4 max-w-[1000px] mx-auto w-full">
      <div className="flex justify-between">
        <div>
          <div className="text-3xl font-semibold">Portfolios</div>
          <p className="text-secondary">
            Manage and organize all your portfolios websites
          </p>
        </div>
        <Button>
          <Plus />
        </Button>
      </div>

      <form className="flex flex-wrap gap-3">
        <div className="flex-1  bg-surface-1 border border-solid border-slate-800 rounded-xl flex items-center gap-2 px-4 py-2">
          <Search />
          <input type="text" placeholder="Search portfolios..." />
        </div>

        <div className="flex flex-wrap gap-3">
          <select className="bg-surface-1 border border-solid border-slate-800 rounded px-2 py-1 outline-none rounded-xl">
            <option value="all">All status</option>
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>

          <div className="bg-surface-1 border border-solid border-slate-800 rounded-xl flex items-center gap-2 px-4 py-2">
            <button>
              <List />
            </button>
            <button>
              <Grid3x3 />
            </button>
          </div>
        </div>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex flex-col gap-2 border border-solid border-slate-800 p-4 rounded-xl bg-surface-1">
          <div className="text-xl font-semibold">2</div>
          <div className="text-secondary">Total Portfolios</div>
        </div>

        <div className="flex flex-col gap-2 border border-solid border-slate-800 p-4 rounded-xl bg-surface-1">
          <div className="text-xl font-semibold">4</div>
          <div className="text-secondary">Published</div>
        </div>

        <div className="flex flex-col gap-2 border border-solid border-slate-800 p-4 rounded-xl bg-surface-1">
          <div className="text-xl font-semibold">4,974</div>
          <div className="text-secondary">Total Views</div>
        </div>

        <div className="flex flex-col gap-2 border border-solid border-slate-800 p-4 rounded-xl bg-surface-1">
          <div className="text-xl font-semibold">24</div>
          <div className="text-secondary">Submissions</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, idx) => (
          <div
            key={idx}
            className="max-w-[600px] flex flex-col gap-2 border border-solid border-slate-800 rounded-xl bg-surface-1"
          >
            <div className="relative w-full aspect-[3/2] overflow-hidden rounded-lg">
              <Image
                src="/600x800.png"
                alt="Sarah Chen"
                fill
                className="object-cover object-center"
              />
            </div>

            <div className="flex flex-col gap-2 p-3">
              <h3>Personal Portfolio</h3>
              <div className="inline-flex gap-1 items-center text-secondary text-sm whitespace-nowrap">
                <Globe size={16} />
                john-doe.portfolio.com
              </div>

              <div className="flex flex-wrap text-secondary">
                <div className="inline-flex gap-1 items-center  text-sm whitespace-nowrap">
                  <Eye size={16} />
                  23
                </div>
                <div className="inline-flex items-center text-secondary text-sm whitespace-nowrap">
                  2 hours ago
                </div>
              </div>

              <div className="flex gap-2">
                <Button className="flex-1" size="sm">
                  Edit
                </Button>
                <Button size="sm">
                  <SquareArrowOutUpRight size={16} />
                </Button>
                <Button size="sm">
                  <EllipsisVertical size={16} />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
