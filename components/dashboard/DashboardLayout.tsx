type DashboardLayoutProps = {
  header: string;
  subheading: string;
  children: React.ReactNode;
};

export function DashboardLayout({
  header,
  subheading,
  children,
}: DashboardLayoutProps) {
  return (
    <div className="flex flex-col gap-4 p-4 max-w-[1000px] mx-auto w-full">
      <div className="flex justify-between">
        <div>
          <div className="text-3xl font-semibold">{header}</div>
          <p className="text-secondary">{subheading}</p>
        </div>
      </div>

      {children}
    </div>
  );
}
