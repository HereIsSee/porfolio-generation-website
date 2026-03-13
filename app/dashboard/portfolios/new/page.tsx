"use client";

import { useState } from "react";
import clsx from "clsx";
import BasicInfo from "../_components/BasicInfo";
import Profile from "../_components/Profile";
import Projects from "../_components/Projects";
import WorkExperience from "../_components/WorkExperience";
import Education from "../_components/Education";
import Skills from "../_components/Skills";
import Theme from "../_components/Theme";
import SectionLayout from "../_components/SectionLayout";
import Payments from "../_components/Payments";
import CustomForms from "../_components/Custom Forms";
import { initialPortfolioDraft } from "@/types/portfolio.types/portfolio.initial";
import {
  PortfolioDraft,
  PortfolioPlan,
  PortfolioStatus,
} from "@/types/portfolio.types/portfolio.types";

const tabs = [
  "Basic Info",
  "Profile",
  "Projects",
  "Work Experience",
  "Education",
  "Skills",
  "Theme",
  "Section Layout",
  "Payments",
  "Custom Forms",
] as const;

type Tab = (typeof tabs)[number];
type PortfolioField = keyof PortfolioDraft["portfolio"];

export default function NewPortfolio() {
  const [selectedTab, setSelectedTab] = useState<Tab>("Basic Info");
  const [portfolioData, setPortfolioData] = useState<PortfolioDraft>(
    initialPortfolioDraft,
  );

  const handlePortfolioChange = <K extends keyof PortfolioDraft["portfolio"]>(
    field: K,
    value: PortfolioDraft["portfolio"][K],
  ) => {
    setPortfolioData((prev) => {
      const next = {
        ...prev,
        portfolio: {
          ...prev.portfolio,
          [field]: value,
        },
      };

      return next;
    });
  };

  const handleProfileChange = <
    K extends keyof PortfolioDraft["profileSection"],
  >(
    field: K,
    value: PortfolioDraft["profileSection"][K],
  ) => {
    setPortfolioData((prev) => ({
      ...prev,
      profileSection: {
        ...prev.profileSection,
        [field]: value,
      },
    }));
  };

  return (
    <div className="mx-8 my-12">
      <div className="overflow-x-auto">
        <div className="flex min-w-max gap-4 text-secondary">
          {tabs.map((tab) => {
            const isActive = selectedTab === tab;

            return (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={clsx(
                  "relative shrink-0 whitespace-nowrap pb-3 text-sm transition-all duration-200",
                  isActive
                    ? "border-b border-blue-500 text-primary"
                    : "text-secondary hover:text-primary",
                )}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-8 max-w-[800px]">
        {selectedTab === "Basic Info" && (
          <BasicInfo
            portfolio={portfolioData.portfolio}
            onChange={handlePortfolioChange}
          />
        )}

        {selectedTab === "Profile" && (
          <Profile
          // profile={portfolioData.profileSection}
          // onChange={handleProfileChange}
          />
        )}

        {selectedTab === "Projects" && <Projects />}

        {selectedTab === "Work Experience" && <WorkExperience />}

        {selectedTab === "Education" && <Education />}

        {selectedTab === "Skills" && <Skills />}

        {selectedTab === "Theme" && <Theme />}

        {selectedTab === "Section Layout" && <SectionLayout />}

        {selectedTab === "Payments" && <Payments />}

        {selectedTab === "Custom Forms" && <CustomForms />}
      </div>
    </div>
  );
}
