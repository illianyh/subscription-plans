"use client";

import { Check } from "lucide-react";
import type { SubscriptionPlan } from "@/app/types/subscription";
import { ANNUAL_DISCOUNT, PLAN_DURATION } from "@/app/constants";
import { PriceSavingsTooltip } from "./tooltip";
interface PlanCardProps {
  plan: SubscriptionPlan;
  isSelected: boolean;
  isAnnualBilling: boolean;
  onSelect: (planId: string) => void;
}

export function PlanCard({
  plan,
  isSelected,
  isAnnualBilling,
  onSelect,
}: PlanCardProps) {
  const monthlyPrice = plan.price;
  const price = isAnnualBilling
    ? Math.round(monthlyPrice * ANNUAL_DISCOUNT)
    : monthlyPrice;

  const getBillingText = () => {
    if (isAnnualBilling) {
      return `Billed £${price * 12} annually`;
    }

    switch (plan.id) {
      case PLAN_DURATION.THREE_MONTH:
        return `Billed £${price * 3} every 3 months`;
      case PLAN_DURATION.SIX_MONTH:
        return `Billed £${price * 6} every 6 months`;
      case PLAN_DURATION.TWELVE_MONTH:
        return `Billed £${price * 12} annually`;
      default:
        return "";
    }
  };

  const getSavingsText = () => {
    if (isAnnualBilling || plan.id === PLAN_DURATION.THREE_MONTH) return null;

    const savingsAmount = plan.id === PLAN_DURATION.SIX_MONTH ? 60 : 180;
    return (
      <div className="text-sm text-gray-600 mt-1">
        <span className="text-black font-medium">Save £{savingsAmount}</span>{" "}
        compared to monthly
      </div>
    );
  };

  return (
    <div
      className={`border p-8 flex flex-col h-full transition-all bg-white ${
        isSelected
          ? "border-[#00ccbd] ring-1 ring-[#00ccbd]"
          : "border-gray-200 hover:border-gray-400"
      }`}
    >
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h2 className="text-xl font-medium">{plan.name}</h2>
          <p className="text-gray-600 text-sm mt-1">{plan.description}</p>
        </div>
        {plan.popular && (
          <div className="bg-[#00ccbd] text-black text-xs font-medium py-1 px-3">
            MOST POPULAR
          </div>
        )}
      </div>

      <div className="mb-6">
        <div className="flex items-baseline">
          <span className="text-3xl font-medium">£{price}</span>
          <span className="text-gray-600 ml-1">/mo</span>
          <div className="ml-2">
            <PriceSavingsTooltip
              plan={plan}
              isAnnualBilling={isAnnualBilling}
            />
          </div>
        </div>

        <div className="text-sm text-gray-600 mt-1">{getBillingText()}</div>

        {getSavingsText()}
      </div>

      <div className="border-t border-gray-200 pt-6 mb-6 flex-grow">
        <p className="text-sm font-medium mb-4">What's included:</p>
        <ul className="space-y-3">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-4 w-4 mr-2 text-[#00ccbd] mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        className={`rounded cursor-pointer w-full py-3 px-5 border transition-all ${
          isSelected
            ? "bg-[#00ccbd] text-black hover:bg-[#00b8aa] border-[#00ccbd]"
            : "bg-white text-black hover:bg-gray-100 border-black"
        }`}
        onClick={() => onSelect(plan.id)}
      >
        {isSelected ? "Selected" : "Select Plan"}
      </button>
    </div>
  );
}
