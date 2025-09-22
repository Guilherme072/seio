// Conteúdo para o novo arquivo: types/index.ts

export type Contact = {
  id: number;
  name: string;
  role: string;
  email: string;
  phone: string;
  department: string;
  addedBy: string;
  addedDate: string;
  contactMethods?: { type: string; value: string }[];
};

export type Observation = {
  id: number;
  text: string;
  author: string;
  date: string;
};

export type Influencer = {
  name: string;
  phone: string;
  instagram: string;
  lastCampaign?: string;
};

export type Brand = {
  id: number;
  name: string;
  category: string;
  website: string;
  logo: string;
  contacts: Contact[];
  suggestedInfluencers: Influencer[];
  observations: Observation[];
  status: string;
  lastContact: string | null;
  lastContactBy: string | null;
  lastContactWith: string | null;
  contactMethod: string | null;
  relationshipLevel: string;
  neverContacted: boolean;
  addedBy: string;
  suggestedBy: string | null;
  closedDeals?: number;
  previousInfluencers?: Influencer[];
};