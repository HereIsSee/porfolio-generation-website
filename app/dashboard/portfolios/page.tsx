import { Button } from "@/components/ui/Button";
import { Plus } from "lucide-react";

export default function Portfolios() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex justify-between">
        <div className="text-3xl font-semibold">Portfolios</div>
        <Button>
          <Plus />
        </Button>
      </div>
    </div>
  );
}
