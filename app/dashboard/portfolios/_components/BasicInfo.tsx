"use client";

import { Info } from "lucide-react";
import {
  PortfolioDraft,
  PortfolioPlan,
  PortfolioStatus,
} from "@/types/portfolio.types/portfolio.types";

type BasicInfoProps = {
  portfolio: PortfolioDraft["portfolio"];
  onChange: <K extends keyof PortfolioDraft["portfolio"]>(
    field: K,
    value: PortfolioDraft["portfolio"][K],
  ) => void;
};

export default function BasicInfo({ portfolio, onChange }: BasicInfoProps) {
  const isTitleEmpty = portfolio.portfolioTitle.trim() === "";
  const isSlugEmpty = portfolio.urlSlug.trim() === "";

  return (
    <div className="flex flex-col gap-2 rounded-xl border border-solid border-slate-800 bg-surface-1 p-4">
      <h1 className="text-xl font-semibold">Basic Info</h1>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label
            className="text-primary text-sm font-medium"
            htmlFor="portfolio-title"
          >
            Portfolio Title
            {isTitleEmpty && <span className="ml-1 text-red-500">*</span>}
          </label>

          <input
            type="text"
            id="portfolio-title"
            value={portfolio.portfolioTitle}
            onChange={(e) => onChange("portfolioTitle", e.target.value)}
            placeholder="e.g., My Portfolio, John's Work"
            className="rounded-xl border border-slate-800 bg-background p-3 text-primary transition-colors focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-3">
          <label
            className="text-primary text-sm font-medium"
            htmlFor="portfolio-slug"
          >
            URL Slug
            {isSlugEmpty && <span className="ml-1 text-red-500">*</span>}
          </label>

          <div className="flex items-center gap-2">
            <p className="shrink-0 text-sm text-secondary">your-domain.com/</p>
            <input
              type="text"
              id="portfolio-slug"
              value={portfolio.urlSlug}
              onChange={(e) => onChange("urlSlug", e.target.value)}
              placeholder="my-portfolio"
              className="flex-1 rounded-xl border border-slate-800 bg-background p-3 text-primary transition-colors focus:border-blue-500 focus:outline-none"
            />
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex flex-1 flex-col gap-2">
            <label
              htmlFor="status"
              className="text-primary text-sm font-medium"
            >
              Status
            </label>

            <select
              id="status"
              value={portfolio.status}
              onChange={(e) =>
                onChange("status", Number(e.target.value) as PortfolioStatus)
              }
              className="rounded-xl border border-solid border-slate-800 bg-background px-3 py-2 text-primary outline-none"
            >
              <option value={PortfolioStatus.DRAFT}>Draft</option>
              <option value={PortfolioStatus.PUBLISHED}>Published</option>
              <option value={PortfolioStatus.BLOCKED}>Blocked</option>
            </select>
          </div>

          <div className="flex flex-1 flex-col gap-2">
            <label htmlFor="plan" className="text-primary text-sm font-medium">
              Plan
            </label>

            <select
              id="plan"
              value={portfolio.plan}
              onChange={(e) =>
                onChange("plan", Number(e.target.value) as PortfolioPlan)
              }
              className="rounded-xl border border-solid border-slate-800 bg-background px-3 py-2 text-primary outline-none"
            >
              <option value={PortfolioPlan.BASIC}>Basic</option>
              <option value={PortfolioPlan.ADVANCED}>Advanced</option>
            </select>
          </div>
        </div>
      </div>

      <div className="border-b border-slate-800 p-1" />

      <div className="inline-flex items-center gap-2 rounded-xl border border-solid border-blue-500/20 bg-blue-500/20 px-2 py-1 text-sm text-blue-400">
        <Info className="h-4 w-4 shrink-0" />
        <p>
          Fill in all required fields to create your portfolio. You can always
          edit these details later.
        </p>
      </div>
    </div>
  );
}
