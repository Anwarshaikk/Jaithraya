export interface ConsultationFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  companySize: "1-10" | "11-50" | "51-200" | "201+";
  businessType: string;
  currentChallenges: string;
  budget?: string;
  timeline?: string;
  preferredContact?: string;
  additionalInfo?: string;
}

export type Plan = {
  name: 'Starter' | 'Growth' | 'Enterprise';
  description: string;
  price: {
    monthly: number | string;
    annual: number | string;
    note?: string;
  };
  features: ReadonlyArray<string>;
  isPopular?: boolean;
};