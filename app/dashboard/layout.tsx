import DashboardSideMenu from "@/components/sidemenu/DashboardSideMenu";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col sm:flex-row">
      <DashboardSideMenu />
      <main className="flex-1 min-w-0">{children}</main>
    </div>
  );
}
