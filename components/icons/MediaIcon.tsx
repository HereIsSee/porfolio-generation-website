import { ReactNode } from "react";

export default function MediaIcon({ children }: { children: ReactNode }) {
  return (
    <button className="block p-3 rounded-xl border border-solid border-slate-800 bg-surface-2 text-secondary hover:text-white hover:border-blue-400 transition-colors duration-200">
      {children}
    </button>
  );
}
