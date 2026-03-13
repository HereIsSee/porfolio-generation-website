"use client";

import { Info, Plus, X } from "lucide-react";
import { PortfolioDraft } from "@/types/portfolio.types/portfolio.types";

type OtherLink = {
  label: string;
  url: string;
};

type ProfileProps = {
  profile: PortfolioDraft["profileSection"];
  contact: PortfolioDraft["contactSection"];
  onProfileChange: <K extends keyof PortfolioDraft["profileSection"]>(
    field: K,
    value: PortfolioDraft["profileSection"][K],
  ) => void;
  onContactChange: <K extends keyof PortfolioDraft["contactSection"]>(
    field: K,
    value: PortfolioDraft["contactSection"][K],
  ) => void;
};
export default function Profile({
  profile,
  contact,
  onProfileChange,
  onContactChange,
}: ProfileProps) {
  const otherLinks: OtherLink[] = contact.otherLinks ?? [];

  const handleAddOtherLink = () => {
    onContactChange("otherLinks", [...otherLinks, { label: "", url: "" }]);
  };

  const handleRemoveOtherLink = (indexToRemove: number) => {
    onContactChange(
      "otherLinks",
      otherLinks.filter((_, index) => index !== indexToRemove),
    );
  };

  const handleOtherLinkChange = (
    indexToUpdate: number,
    field: keyof OtherLink,
    value: string,
  ) => {
    onContactChange(
      "otherLinks",
      otherLinks.map((link, index) =>
        index === indexToUpdate ? { ...link, [field]: value } : link,
      ),
    );
  };

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
              <button
                type="button"
                onClick={handleAddOtherLink}
                className="inline-flex items-center gap-0.5 text-blue-500 hover:text-blue-400 transition-colors"
              >
                <Plus />
                <span className="text-sm font-medium">Add</span>
              </button>
            </div>

            <div id="other-links" className="flex flex-col gap-2">
              {otherLinks.map((link, index) => (
                <div
                  key={index}
                  className="flex gap-2 flex-wrap justify-center items-center"
                >
                  <input
                    type="text"
                    value={link.label}
                    onChange={(e) =>
                      handleOtherLinkChange(index, "label", e.target.value)
                    }
                    placeholder="Label (eg. Twitter)"
                    className="flex-1 min-w-0 rounded-xl border border-slate-800 bg-background p-3 text-primary transition-colors focus:border-blue-500 focus:outline-none"
                  />

                  <input
                    type="text"
                    value={link.url}
                    onChange={(e) =>
                      handleOtherLinkChange(index, "url", e.target.value)
                    }
                    placeholder="URL"
                    className="flex-1 min-w-0 rounded-xl border border-slate-800 bg-background p-3 text-primary transition-colors focus:border-blue-500 focus:outline-none"
                  />

                  <button
                    type="button"
                    onClick={() => handleRemoveOtherLink(index)}
                    className="inline-flex items-center gap-0.5 rounded-xl bg-red-500/10 p-2 text-red-500 transition-colors hover:bg-red-500/40"
                  >
                    <X />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
