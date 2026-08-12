export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  idealFor?: string;
  features: string[];
  gradient: string;
  badge?: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  description: string;
  solutions: string[];
  iconName: string;
  badge: string;
}

export interface EcosystemMember {
  id: string;
  title: string;
  role: string;
  specialty: string;
  iconName: string;
  color: string;
}

export interface WhyChooseItem {
  number: string;
  title: string;
  description: string;
  highlight: string;
  iconName: string;
}

export interface ProcessStep {
  step: string;
  number: number;
  title: string;
  description: string;
  deliverables: string[];
  iconName: string;
}

export interface ComparisonPoint {
  id: string;
  vendorPain: string;
  svayamGain: string;
  iconName: string;
}

export interface ConsultationFormData {
  name: string;
  email: string;
  phone: string;
  companyName: string;
  businessStage: 'startup' | 'sme' | 'enterprise' | 'individual';
  servicesNeeded: string[];
  timeline: string;
  projectDetails: string;
}
