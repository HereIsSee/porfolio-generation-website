import { DollarSign, Trash2 } from "lucide-react";
import EmptyState from "@/components/shared/EnptyState";
import SectionHeader from "@/components/shared/SectionHeader";
import Card from "@/components/ui/Card";

export default function Payment() {
  return (
    <div className="flex flex-col gap-4">
      <SectionHeader
        title="Payment Methods"
        description="Showcase your payment methods to your visitors"
        buttonLabel="Add Payment Method"
        buttonAction={() => {}}
      />
      <EmptyState
        title="No Payment Methods"
        description="Add payment options to accept payments for your services"
        buttonLabel="Add Payment Method"
        buttonIcon={<DollarSign size={32} />}
        buttonAction={() => {}}
      />

      <Card>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center ">
            <h3 className="text-mg text-primary font-semibold">
              Payment Block 1
            </h3>
            <div>toggle</div>
          </div>
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
              placeholder="Consultation Fee, Project Deposit, etc."
              className="rounded-xl border border-slate-800 bg-background p-3 text-primary transition-colors focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              className="text-primary text-sm font-medium"
              htmlFor="description"
            >
              Description
            </label>

            <textarea
              id="description"
              placeholder="Describe what this payment is for..."
              className="rounded-xl min-h-[150px] border border-slate-800 bg-background p-3 text-primary transition-colors focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div className="flex gap-2">
            <div className="flex min-w-0 flex-1 flex-col gap-2">
              <label
                className="text-primary text-sm font-medium"
                htmlFor="paymentType"
              >
                Payment Type
              </label>

              <select className="rounded-xl border border-slate-800 bg-background p-3 text-primary transition-colors focus:border-blue-500 focus:outline-none">
                <option value="all">Fixed Amount</option>
                <option value="draft">Custom Amount</option>
              </select>
            </div>

            <div className="flex min-w-0 flex-1 flex-col gap-2">
              <label
                className="text-primary text-sm font-medium"
                htmlFor="paymentType"
              >
                Currency
              </label>

              <select className="rounded-xl border border-slate-800 bg-background p-3 text-primary transition-colors focus:border-blue-500 focus:outline-none">
                <option value="USD">USD - US Dollar</option>
                <option value="EUR">EUR - Euro</option>
                <option value="GBP">GBP - British Pound</option>
                <option value="CAD">CAD - Canadian Dollar</option>
                <option value="AUD">AUD - Australian Dollar</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-primary text-sm font-medium" htmlFor="title">
              Fixed Amount
            </label>

            <input
              type="number"
              id="title"
              value={0}
              className="rounded-xl border border-slate-800 bg-background p-3 text-primary transition-colors focus:border-blue-500 focus:outline-none"
            />
          </div>
        </form>
      </Card>

      <div className="inline-flex items-center gap-2 rounded-xl border border-solid border-amber-500/20 bg-amber-400/15 px-2 py-1 text-sm text-primary">
        <p className="text-secondary">
          <span className="font-semibold text-primary">Note:</span> Payment
          processing requires integration with a payment gateway (e.g., Stripe,
          PayPal). Configure payment credentials in your account settings
        </p>
      </div>
    </div>
  );
}
