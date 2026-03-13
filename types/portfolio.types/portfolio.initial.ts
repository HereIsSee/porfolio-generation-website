// portfolio.initial.ts
import {
  FieldType,
  PaymentAmountType,
  PortfolioDraft,
  PortfolioPlan,
  PortfolioStatus,
} from "./portfolio.types";

export const initialPortfolioDraft: PortfolioDraft = {
  portfolio: {
    portfolioTitle: "",
    urlSlug: "",
    status: PortfolioStatus.DRAFT,
    plan: PortfolioPlan.BASIC,
  },

  profileSection: {
    fullName: "",
    headline: "",
    about: "",
    location: "",
  },

  contactSection: {
    email: "",
    phone: "",
    location: "",
    otherLinks: [],
  },

  projects: [],

  workExperience: [],

  education: [],

  skills: [],

  themeSettings: {
    themeId: null,
    primaryColor: "",
    secondaryColor: "",
    fontFamily: "",
    buttonStyle: "",
    customCss: "",
  },

  sectionLayout: [],

  paymentBlocks: [],

  forms: [],
};
