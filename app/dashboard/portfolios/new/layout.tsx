import { ArrowLeft, Save } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen">
      <div className="flex flex-1 min-w-0 flex-col">
        <header className="flex items-center justify-between max-h-[100px] py-3 px-5 bg-surface-1 border-b border-slate-800">
          <div className="inline-flex items-center gap-3 min-w-0">
            <ArrowLeft className="text-secondary hover:text-primary duration-200 shrink-0" />
            <div className="min-w-0">
              <h1 className="text-3xl text-primary">Create New Portfolio</h1>
              <p className="text-secondary">
                Build your professional portfolio
              </p>
            </div>
          </div>
          <Button>
            <Save /> Save Portfolio
          </Button>
        </header>

        <main className="flex-1 min-w-0">{children}</main>
      </div>
    </div>
  );
}
