import ProfileSideMenu from "@/components/sidemenu/ProfileSideMenu";

export default function SettingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col sm:flex-row">
      <ProfileSideMenu />
      <main className="flex-1">{children}</main>
    </div>
  );
}
