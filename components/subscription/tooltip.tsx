"use client";

import { useState } from "react";
import { Info } from "lucide-react";
import type { SubscriptionPlan } from "@/app/types/subscription";
import { ANNUAL_DISCOUNT } from "@/app/constants";

interface PriceSavingsTooltipProps {
  plan: SubscriptionPlan;
  isAnnualBilling: boolean;
}

export function PriceSavingsTooltip({
  plan,
  isAnnualBilling,
}: PriceSavingsTooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  const monthlyPrice = plan.price;
  const effectivePrice = isAnnualBilling
    ? Math.round(monthlyPrice * ANNUAL_DISCOUNT)
    : monthlyPrice;

  const monthlySavings = monthlyPrice - effectivePrice;
  const annualSavings = monthlySavings * 12;

  if (monthlySavings <= 0) return null;

  return (
    <div className="relative inline-block">
      <button
        type="button"
        className="text-gray-500 hover:text-gray-700 focus:outline-none"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onFocus={() => setIsVisible(true)}
        onBlur={() => setIsVisible(false)}
        aria-label="View savings details"
      >
        <Info className="h-4 w-4" />
      </button>

      {isVisible && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 p-3 bg-white shadow-lg rounded-md text-sm z-10">
          <div className="font-medium mb-1">Your savings:</div>
          <div className="text-gray-600">
            <div>£{monthlySavings} per month</div>
            <div className="font-medium text-black">
              £{annualSavings} per year
            </div>
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-white"></div>
        </div>
      )}
    </div>
  );
}
