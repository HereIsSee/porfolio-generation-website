import Card from "@/components/ui/Card";
import { GripVertical } from "lucide-react";

export default function SectionLayout() {
  return (
    <div className="flex flex-col gap-4">
      <Card>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold">Section Layout</h2>
          <p className="text-sm text-secondary">
            Reorder sections and control their visibility on your portfolio
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between bg-surface-3 p-3 rounded-lg border border-solid border-slate-800">
            <div className="flex justify-center items-center gap-2">
              <div className="flex flex-col gap-2">
                <GripVertical size={18} />
                <GripVertical size={18} />
              </div>
              <div className="text-mds text-secondary">#1</div>
              <div className="text- font-medium">Profile Section</div>
            </div>
            <div className="flex justify-center items-center gap-2">
              <span className="text-sm text-secondary">Visible</span>
              <input type="checkbox" className="sr-only peer" />

              <div
                className="w-11 h-6 bg-gray-200 rounded-full peer 
              peer-checked:bg-blue-600
              relative after:content-['']
              after:absolute after:top-[2px] after:left-[2px]
              after:bg-white after:border after:rounded-full
              after:h-5 after:w-5 after:transition-all
              peer-checked:after:translate-x-full"
              ></div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
