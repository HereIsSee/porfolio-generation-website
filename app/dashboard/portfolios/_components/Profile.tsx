"use client";

import { Info, Plus, X } from "lucide-react";
import {
  PortfolioDraft,
  PortfolioPlan,
  PortfolioStatus,
} from "@/types/portfolio.types/portfolio.types";

type ProfileProps = {
  profile: PortfolioDraft["profileSection"];
  onChange: <K extends keyof PortfolioDraft["profileSection"]>(
    field: K,
    value: PortfolioDraft["profileSection"][K],
  ) => void;
};

export default function Profile({ profile, onChange }: ProfileProps) {
  // const isTitleEmpty = profile.portfolioTitle.trim() === "";
  // const isSlugEmpty = profile.urlSlug.trim() === "";

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2 rounded-xl border border-solid border-slate-800 bg-surface-1 p-4">
        <h1 className="text-xl font-semibold">Profile Information</h1>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label
              className="text-primary text-sm font-medium"
              htmlFor="full-name"
            >
              Full Name
              {/* {isTitleEmpty && <span className="ml-1 text-red-500">*</span>} */}
            </label>

            <input
              type="text"
              id="full-name"
              // value={portfolio.portfolioTitle}
              // onChange={(e) => onChange("portfolioTitle", e.target.value)}
              placeholder="John Doe"
              className="rounded-xl border border-slate-800 bg-background p-3 text-primary transition-colors focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              className="text-primary text-sm font-medium"
              htmlFor="headline"
            >
              Headline
              {/* {isTitleEmpty && <span className="ml-1 text-red-500">*</span>} */}
            </label>

            <input
              type="text"
              id="headline"
              // value={portfolio.portfolioTitle}
              // onChange={(e) => onChange("portfolioTitle", e.target.value)}
              placeholder="Full Stack Developer | UI/UX Enthusiast"
              className="rounded-xl border border-slate-800 bg-background p-3 text-primary transition-colors focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-primary text-sm font-medium" htmlFor="about">
              About
              {/* {isTitleEmpty && <span className="ml-1 text-red-500">*</span>} */}
            </label>

            <textarea
              id="about"
              // value={portfolio.portfolioTitle}
              // onChange={(e) => onChange("portfolioTitle", e.target.value)}
              placeholder="Tell us about yourself, your passions, and what drives you..."
              className="min-h-[150px] rounded-xl border border-slate-800 bg-background p-3 text-primary transition-colors focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              className="text-primary text-sm font-medium"
              htmlFor="location"
            >
              Location
              {/* {isTitleEmpty && <span className="ml-1 text-red-500">*</span>} */}
            </label>

            <input
              type="text"
              id="location"
              // value={portfolio.portfolioTitle}
              // onChange={(e) => onChange("portfolioTitle", e.target.value)}
              placeholder="San Francisco, CA"
              className="rounded-xl border border-slate-800 bg-background p-3 text-primary transition-colors focus:border-blue-500 focus:outline-none"
            />
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col gap-2 rounded-xl border border-solid border-slate-800 bg-surface-1 p-4">
        <h1 className="text-xl font-semibold">Contact Information</h1>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-primary text-sm font-medium" htmlFor="email">
              Email
              {/* {isTitleEmpty && <span className="ml-1 text-red-500">*</span>} */}
            </label>

            <input
              type="text"
              id="email"
              // value={portfolio.portfolioTitle}
              // onChange={(e) => onChange("portfolioTitle", e.target.value)}
              placeholder="john@example.com"
              className="rounded-xl border border-slate-800 bg-background p-3 text-primary transition-colors focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-primary text-sm font-medium" htmlFor="phone">
              Phone
              {/* {isTitleEmpty && <span className="ml-1 text-red-500">*</span>} */}
            </label>

            <input
              type="text"
              id="phone"
              // value={portfolio.portfolioTitle}
              // onChange={(e) => onChange("portfolioTitle", e.target.value)}
              placeholder="+370 000 00000"
              className="rounded-xl border border-slate-800 bg-background p-3 text-primary transition-colors focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              className="text-primary text-sm font-medium"
              htmlFor="linkedin"
            >
              LinkedIn URL
              {/* {isTitleEmpty && <span className="ml-1 text-red-500">*</span>} */}
            </label>

            <input
              type="text"
              id="linkedin"
              // value={portfolio.portfolioTitle}
              // onChange={(e) => onChange("portfolioTitle", e.target.value)}
              placeholder="linkedin.com/in/john-doe"
              className="rounded-xl border border-slate-800 bg-background p-3 text-primary transition-colors focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              className="text-primary text-sm font-medium"
              htmlFor="github"
            >
              GitHub URL
              {/* {isTitleEmpty && <span className="ml-1 text-red-500">*</span>} */}
            </label>

            <input
              type="text"
              id="github"
              // value={portfolio.portfolioTitle}
              // onChange={(e) => onChange("portfolioTitle", e.target.value)}
              placeholder="github.com/john-doe"
              className="rounded-xl border border-slate-800 bg-background p-3 text-primary transition-colors focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center justify-between">
              <div className="text-primary text-sm font-medium">Other Lnks</div>
              <button className="inline-flex items-center gap-0.5 text-blue-500 hover:text-blue-400 transition-colors">
                <Plus />
                <span className="text-sm font-medium">Add</span>
              </button>
            </div>
            {/* This part */}
            <div className="flex gap-2 flex-wrap">
              <input
                type="text"
                placeholder="Label (eg. Twitter)"
                className="flex-1 min-w-0 rounded-xl border border-slate-800 bg-background p-3 text-primary transition-colors focus:border-blue-500 focus:outline-none"
              />
              <input
                type="text"
                placeholder="URL"
                className="flex-1 min-w-0 rounded-xl border border-slate-800 bg-background p-3 text-primary transition-colors focus:border-blue-500 focus:outline-none"
              />

              <button className="inline-flex items-center justify-center rounded-xl bg-red-500/20 p-3 text-red-500 transition-colors hover:bg-red-500/10">
                <X />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
