type CardProps = {
  children: React.ReactNode;
};

export default function Card({ children }: CardProps) {
  return (
    <div className="flex flex-col gap-2 rounded-xl border border-solid border-slate-800 bg-surface-1 p-4">
      {children}
    </div>
  );
}
