import SideMenu from "@/components/sidemenu/SideMenu";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col sm:flex-row">
      <SideMenu />
      <main className="flex-1">{children}</main>
    </div>
  );
}
