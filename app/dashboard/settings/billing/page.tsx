import { CreditCard } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Billing() {
  return (
    <div className="flex flex-col gap-4 p-4 max-w-[800px] mx-auto w-full">
      <div>
        <div className="text-2xl font-semibold">Billing & Subscription</div>
        <p className="text-secondary">
          Manage your subscription and payment methods
        </p>
      </div>

      <div className="flex flex-col gap-3 bg-surface-1 p-4 rounded-xl border border-solid border-slate-800">
        <h3 className="text-xl">Current Plan</h3>

        <div className="flex justify-between items-center bg-background border border-slate-800 rounded-xl p-4">
          <div>
            <div className="text-sm">Pro Plan</div>
            <div className="text-secondary text-sm">
              $29/month • Next billing date: April 10, 2026
            </div>
          </div>

          <div className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full text-sm">
            Active
          </div>
        </div>

        <div className="flex gap-2">
          <Button>Change Plan</Button>

          <Button>Cancel Subscription</Button>
        </div>
      </div>

      <div className="flex flex-col gap-3 bg-surface-1 p-4 rounded-xl border border-solid border-slate-800">
        <h3 className="text-xl">Payment Method</h3>

        <div className="flex justify-between items-center bg-background border border-slate-800 rounded-xl p-4">
          <div className="flex gap-2 items-center">
            <div className="shrink-0 bg-surface-1 p-2 rounded-md">
              <CreditCard className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <div className="text-sm">•••• •••• •••• 4242</div>
              <div className="text-secondary text-sm">Expires 12/26</div>
            </div>
          </div>

          <div className="text-sm text-secondary hover:text-primary duration-200">
            Edit
          </div>
        </div>

        <Button className="w-fit">Add Payment Method</Button>
      </div>

      <div className="flex flex-col gap-3 bg-surface-1 p-4 rounded-xl border border-solid border-slate-800">
        <h3 className="text-xl">Billing History</h3>

        <div className="flex justify-between items-center bg-background border border-slate-800 rounded-xl p-4">
          <div>
            <div className="text-sm">March 10, 2026</div>
            <div className="text-secondary text-sm">Pro Plan - Monthly</div>
          </div>

          <div className="inline-flex gap-2 items-center text-sm ">
            <div>$29.00</div>
            <div className="text-secondary hover:text-primary duration-200">
              Invoice
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
