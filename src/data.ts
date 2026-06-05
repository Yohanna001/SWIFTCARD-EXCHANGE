// @ts-ignore
import amazonImage from './Experiential Gardener.jpg';
// @ts-ignore
import appleImage from './What type of gift card do I have_ - Apple Support.jpg';
// @ts-ignore
import steamImage from "./It's a Gamer's Delight_ $500 for Redemption on Steam.jpg";
// @ts-ignore
import googlePlayImage from './Google Play Email Delivery Gift Card, Various Amounts - Samsclub_com.jpg';
// @ts-ignore
import sephoraImage from './$750 sephora Giftcards_2024🔥.jpg';
// @ts-ignore
import nikeImage from './nike_giftcard.jpg';
// @ts-ignore
import walmartImage from './walmart_giftcard.jpg';
// @ts-ignore
import ebayImage from './ebay_giftcard.jpg';
// @ts-ignore
import razerGoldImage from './razer_gold_giftcard.jpg';
import { GiftCard, TradeStat, Feature, Feedback } from './types';

export const WHATS_APP_NUMBER = '+2347010749941';
export const WHATS_APP_BASE_URL = 'https://wa.me/2347010749941';

// Helper to proxy high-res card images and bypass hotlinking block / CORS/ 403 blocks
const proxyImage = (url: string) => `https://images.weserv.nl/?url=${encodeURIComponent(url)}&w=500`;

export const giftCards: GiftCard[] = [
  {
    id: 'amazon',
    name: 'Amazon USA',
    category: 'Shopping',
    ratePer100: 75000,
    ratePerDollar: 750,
    currencyCode: 'USD',
    country: 'USA',
    payoutSpeed: 'Instant (2 mins)',
    iconName: 'ShoppingBag',
    colorTheme: 'from-[#FF9900]/20 to-[#FF9900]/10 border-[#FF9900]/40',
    popular: true,
    imageUrl: amazonImage,
  },
  {
    id: 'apple',
    name: 'Apple / iTunes',
    category: 'Gaming & Media',
    ratePer100: 78000,
    ratePerDollar: 780,
    currencyCode: 'USD',
    country: 'USA',
    payoutSpeed: '3 - 5 mins',
    iconName: 'Laptop',
    colorTheme: 'from-[#000000]/40 to-[#555555]/20 border-slate-600',
    popular: true,
    imageUrl: appleImage,
  },
  {
    id: 'steam',
    name: 'Steam',
    category: 'Gaming',
    ratePer100: 72000,
    ratePerDollar: 720,
    currencyCode: 'USD',
    country: 'USA/Global',
    payoutSpeed: 'Instant (3 mins)',
    iconName: 'Gamepad2',
    colorTheme: 'from-[#171a21]/50 to-[#102a45]/30 border-blue-500/40',
    popular: true,
    imageUrl: steamImage,
  },
  {
    id: 'google-play',
    name: 'Google Play',
    category: 'Gaming & Apps',
    ratePer100: 70000,
    ratePerDollar: 700,
    currencyCode: 'USD',
    country: 'USA',
    payoutSpeed: '2 - 4 mins',
    iconName: 'Play',
    colorTheme: 'from-[#34A853]/20 to-[#4285F4]/10 border-emerald-500/35',
    popular: false,
    imageUrl: googlePlayImage,
  },
  {
    id: 'sephora',
    name: 'Sephora',
    category: 'Beauty',
    ratePer100: 68000,
    ratePerDollar: 680,
    currencyCode: 'USD',
    country: 'USA',
    payoutSpeed: 'Instant (5 mins)',
    iconName: 'Sparkles',
    colorTheme: 'from-[#FF007A]/20 to-[#000000]/40 border-[#FF007A]/40',
    popular: false,
    imageUrl: sephoraImage,
  },
  {
    id: 'nike',
    name: 'Nike',
    category: 'Apparel',
    ratePer100: 65000,
    ratePerDollar: 650,
    currencyCode: 'USD',
    country: 'USA',
    payoutSpeed: '3 - 6 mins',
    iconName: 'Activity',
    colorTheme: 'from-[#ffffff]/10 to-[#111111]/30 border-slate-400/30',
    popular: false,
    imageUrl: nikeImage,
  },
  {
    id: 'walmart',
    name: 'Walmart',
    category: 'Department Store',
    ratePer100: 67000,
    ratePerDollar: 670,
    currencyCode: 'USD',
    country: 'USA',
    payoutSpeed: 'Instant (4 mins)',
    iconName: 'Store',
    colorTheme: 'from-[#0071CE]/20 to-[#FFC220]/10 border-blue-400/45',
    popular: false,
    imageUrl: walmartImage,
  },
  {
    id: 'ebay',
    name: 'eBay',
    category: 'Shopping',
    ratePer100: 69000,
    ratePerDollar: 690,
    currencyCode: 'USD',
    country: 'USA',
    payoutSpeed: 'Instant (3 mins)',
    iconName: 'Compass',
    colorTheme: 'from-[#E53238]/10 to-[#0064D2]/10 border-amber-500/30',
    popular: false,
    imageUrl: ebayImage,
  },
  {
    id: 'razer-gold',
    name: 'Razer Gold',
    category: 'Gaming',
    ratePer100: 74000,
    ratePerDollar: 740,
    currencyCode: 'USD',
    country: 'Global',
    payoutSpeed: 'Instant (2 mins)',
    iconName: 'Coins',
    colorTheme: 'from-[#FFD700]/20 to-[#00ff00]/5 border-yellow-500/40',
    popular: true,
    imageUrl: razerGoldImage,
  },
  {
    id: 'visa',
    name: 'Visa Gift Card',
    category: 'Prepaid',
    ratePer100: 80000,
    ratePerDollar: 800,
    currencyCode: 'USD',
    country: 'USA',
    payoutSpeed: 'instant (5 mins)',
    iconName: 'CreditCard',
    colorTheme: 'from-[#1A1F71]/30 to-[#F7B600]/10 border-indigo-500/40',
    popular: true,
    imageUrl: 'https://images.unsplash.com/photo-1589758438368-0ad531db3366?auto=format&fit=crop&w=500&q=80',
  },
];

export const statistics: TradeStat[] = [
  {
    label: '5,000+',
    value: 'Successful Trades',
    description: 'Highly verified trust records in the local market.',
  },
  {
    label: '24/7',
    value: 'Active Support',
    description: 'We trade all day & night. Reach out to us anytime.',
  },
  {
    label: 'Instant',
    value: 'Fast Payment',
    description: 'Paid directly into your local bank account immediately.',
  },
  {
    label: '100%',
    value: 'Trusted Platform',
    description: 'Safeguarded transactions and dedicated agents.',
  },
];

export const features: Feature[] = [
  {
    id: 'rates',
    title: 'Best Market Rates',
    description: 'We continuously review market trends to offer premium rates, maximizing your cash value per dollar.',
    iconName: 'TrendingUp',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'payment',
    title: 'Instant Payment',
    description: 'Once standard security confirmations are made, your local bank transfer is executed in under 5 minutes.',
    iconName: 'Zap',
    imageUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'secure',
    title: 'Secure Transactions',
    description: 'Direct encryption and encrypted end-to-end communication pathways securely nested on the WhatsApp framework.',
    iconName: 'ShieldCheck',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'support',
    title: 'Fast Customer Support',
    description: 'Chat directly with dedicated, human financial specialists standing by real-time to escort your trade step-by-step.',
    iconName: 'MessageSquareText',
    imageUrl: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'reliable',
    title: 'Reliable Service',
    description: 'Trusted by thousands of modern Nigerian youths, entrepreneurs, and remote workers with zero hidden transaction costs.',
    iconName: 'CheckCircle',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'alltime',
    title: '24/7 Availability',
    description: 'Never get stuck of funds at odd times. Our automated operations runs twenty-four hours, seven days a week.',
    iconName: 'Clock',
    imageUrl: 'https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&w=600&q=80',
  },
];

export const tradeSteps = [
  {
    step: 'Step 1',
    title: 'Select your gift card',
    description: 'Browse our list of supported card brands and find the one you have in hand.',
  },
  {
    step: 'Step 2',
    title: 'Check the current rate',
    description: 'Use our real-time visual conversion calculator to state your amount and check the exact ₦ payout.',
  },
  {
    step: 'Step 3',
    title: 'Click Sell Now',
    description: 'Initiate a secure transaction stream to lock in your live premium rates before they expire.',
  },
  {
    step: 'Step 4',
    title: 'Contact us via WhatsApp',
    description: 'Submit your card codes or image securely to our verified WhatsApp representative desk.',
  },
  {
    step: 'Step 5',
    title: 'Receive payment',
    description: 'Savor instant local bank verification. Payout enters your account balance in 5 minutes flat!',
  },
];

export const faqs = [
  {
    question: 'How fast will I get paid for my gift card?',
    answer: 'Extremely fast! Transactions typically take between 2 to 5 minutes once loaded. Payouts are made directly via instant local bank transfer immediately following code authentication.',
  },
  {
    question: 'Why does SwiftCard Exchange only trade via WhatsApp?',
    answer: 'We prioritize personalized, zero-friction communication. WhatsApp guarantees direct human confirmation, eliminates technical database errors, handles bulk images instantly, and provides a continuous, highly secure environment you already know and trust.',
  },
  {
    question: 'Are the rates displayed here accurate and fixed?',
    answer: 'Yes! The rates shown on our website are updated regularly to track optimal financial indexes. Locking your trade in with our instant WhatsApp CTA secures those exact Rates for your transaction.',
  },
  {
    question: 'What types of gift cards can I sell here?',
    answer: 'We buy Amazon, Apple/iTunes, Steam, Google Play, Sephora, Nike, Walmart, eBay, Razer Gold, and Visa Gift Cards. We accept various denominations ranging from $10 to $1,000.',
  },
  {
    question: 'Is my card secure before payment is finalized?',
    answer: 'Absolutely. We apply high industry discretion. Your cards are processed immediately through certified vendor channels with zero third-party disclosure. That is why over 5,000 traders choose us.',
  },
];

export const testimonials: Feedback[] = [
  {
    id: '1',
    name: 'Chinedu O.',
    date: 'Today',
    rating: 5,
    comment: 'Most reliable place to trade my steam cards. Got my transfer within 3 minutes of sending the codes. SwiftCard is indeed swift!',
    cardTraded: 'Steam Card USA',
  },
  {
    id: '2',
    name: 'Mariam A.',
    date: 'Yesterday',
    rating: 5,
    comment: 'Super high rates for Apple and Google Play card compared to standard apps. I recommend this platform to all my friends.',
    cardTraded: 'Apple Card ($200)',
  },
  {
    id: '3',
    name: 'Tobi S.',
    date: '2 days ago',
    rating: 5,
    comment: 'Was skeptical about doing deals on WhatsApp at first, but they are incredibly professional. Visas get instant highest value. Awesome rate calculator too.',
    cardTraded: 'Visa Gift Card ($500)',
  },
  {
    id: '4',
    name: 'Blessing E.',
    date: '4 days ago',
    rating: 5,
    comment: 'The support is outstanding. Even traded late at midnight around 2 AM and still got paid within 5 minutes of verification! God bless you guys.',
    cardTraded: 'Sephora Gift Card ($100)',
  },
];
