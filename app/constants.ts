import { SubscriptionPlan } from "./types/subscription";

export const ANNUAL_DISCOUNT = 0.8;

export const PLAN_DURATION = {
  THREE_MONTH: "3-month",
  SIX_MONTH: "6-month",
  TWELVE_MONTH: "12-month",
};

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: "3-month",
    name: "3 Month Plan",
    price: 30,
    description: "Basic treatment plan",
    features: [
      "Cancel anytime",
      "Free shipping",
      "Discreet packaging",
      "Email support",
    ],
    billingCycle: {
      monthly: 30,
      quarterly: 90,
      annual: 360,
    },
  },
  {
    id: "6-month",
    name: "6 Month Plan",
    price: 25,
    description: "Our most popular plan",
    features: [
      "Cancel anytime",
      "Free shipping",
      "Discreet packaging",
      "Priority support",
      "Free consultation",
    ],
    popular: true,
    billingCycle: {
      monthly: 25,
      biannual: 150,
      annual: 300,
    },
  },
  {
    id: "12-month",
    name: "12 Month Plan",
    price: 20,
    description: "Best value for committed customers",
    features: [
      "Cancel anytime",
      "Free shipping",
      "Discreet packaging",
      "Priority support",
      "Free consultation",
      "Free product samples",
      "Exclusive member perks",
    ],
    billingCycle: {
      monthly: 20,
      annual: 240,
    },
  },
];
