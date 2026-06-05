export interface GiftCard {
  id: string;
  name: string;
  category: string;
  ratePer100: number; // e.g. 75000
  ratePerDollar: number; // e.g. 750
  currencyCode: string;
  country: string;
  payoutSpeed: string; // e.g. "Instant (2-5 mins)"
  iconName: string;
  colorTheme: string; // Tailind gradient color class for background accent
  popular?: boolean;
  imageUrl: string;
}

export interface TradeStat {
  label: string;
  value: string;
  description: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
  imageUrl?: string;
}

export interface Feedback {
  id: string;
  name: string;
  date: string;
  rating: number;
  comment: string;
  cardTraded: string;
}
