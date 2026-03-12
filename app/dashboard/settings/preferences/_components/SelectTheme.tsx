"use client";
import { useState } from "react";

type Theme = "light" | "dark";

export default function SelectTheme() {
  const [theme, setTheme] = useState<Theme>("light");

  const selectionStyle = "bg-purple-500/20 border-purple-500";
  const baseStyle = "border-slate-800";

  return (
    <div className="flex flex-col gap-4 bg-surface-1 p-4 rounded-xl border border-slate-800">
      <h3 className="text-xl">Default Theme</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <button
          onClick={() => setTheme("light")}
          className={`bg-background p-4 rounded-xl border transition hover:border-purple-500 ${
            theme === "light" ? selectionStyle : baseStyle
          }`}
        >
          <div className="h-32 w-full bg-white rounded-xl mb-2" />
          <div className="text-center">Light Theme</div>
        </button>

        <button
          onClick={() => setTheme("dark")}
          className={`bg-background p-4 rounded-xl border transition hover:border-purple-500 ${
            theme === "dark" ? selectionStyle : baseStyle
          }`}
        >
          <div className="h-32 w-full bg-surface-4 rounded-xl mb-2" />
          <div className="text-center">Dark Theme</div>
        </button>
      </div>
    </div>
  );
}
