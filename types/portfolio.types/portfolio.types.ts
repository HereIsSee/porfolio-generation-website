// portfolio.types.ts

export enum PortfolioStatus {
  DRAFT = 1,
  PUBLISHED = 2,
  BLOCKED = 3,
}

export enum PortfolioPlan {
  BASIC = 1,
  ADVANCED = 2,
}

export enum PaymentAmountType {
  FIXED = 1,
  CUSTOM = 2,
}

export enum FieldType {
  TEXT = 1,
  EMAIL = 2,
  TEXTAREA = 3,
  SELECT = 4,
  CHECKBOX = 5,
}

export type PortfolioDraft = {
  portfolio: {
    portfolioTitle: string;
    urlSlug: string;
    status: PortfolioStatus;
    plan: PortfolioPlan;
  };

  profileSection: {
    fullName: string;
    headline: string;
    about: string;
    location: string;
  };

  contactSection: {
    email: string;
    phone: string;
    location: string;
    otherLinks: Array<{
      label: string;
      url: string;
    }>;
  };

  projects: Array<{
    id: string;
    title: string;
    description: string;
    projectUrl: string;
    repoUrl: string;
  }>;

  workExperience: Array<{
    id: string;
    company: string;
    position: string;
    startDate: string;
    endDate: string | null;
    description: string;
  }>;

  education: Array<{
    id: string;
    institution: string;
    degree: string;
    field: string;
    startDate: string;
    endDate: string | null;
    description: string;
  }>;

  skills: Array<{
    id: string;
    name: string;
    category: string;
  }>;

  themeSettings: {
    themeId: number | null;
    primaryColor: string;
    secondaryColor: string;
    fontFamily: string;
    buttonStyle: string;
    customCss: string;
  };

  sectionLayout: Array<{
    id: string;
    sectionKey: string;
    orderIndex: number;
    isVisible: boolean;
  }>;

  paymentBlocks: Array<{
    id: string;
    title: string;
    description: string;
    fixedAmount: number | null;
    currency: string;
    isEnabled: boolean;
    amountType: PaymentAmountType;
  }>;

  forms: Array<{
    id: string;
    title: string;
    isPublic: boolean;
    fields: Array<{
      id: string;
      label: string;
      required: boolean;
      optionsJson: string;
      orderIndex: number;
      type: FieldType;
    }>;
  }>;
};
