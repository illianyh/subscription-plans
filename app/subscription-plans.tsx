"use client";

import { useState } from "react";
import { PlanCard } from "@/components/subscription/plan-card";
import { BillingToggle } from "@/components/subscription/billing-toggle";
import { StatsSection } from "@/components/subscription/stats-section";
import { CheckoutButton } from "@/components/subscription/checkout-button";
import { PLAN_DURATION, subscriptionPlans } from "./constants";
import { FAQSection } from "@/components/subscription/faq-section";
import { PromoCode } from "@/components/subscription/promo-code";
import { useSubscription } from "@/app/context/SubscriptionContext";
export default function SubscriptionPlans() {
  const [discountPercent, setDiscountPercent] = useState(0);

  const handleApplyPromo = (discount: number) => {
    setDiscountPercent(discount);
  };

  const [isAnnualBilling, setIsAnnualBilling] = useState<boolean>(false);
  const [selectedPlanId, setSelectedPlanId] = useState<string>(
    PLAN_DURATION.SIX_MONTH
  );

  const handlePlanSelection = (planId: string) => {
    setSelectedPlanId(planId);
  };

  const handleBillingToggle = (isAnnual: boolean) => {
    setIsAnnualBilling(isAnnual);
  };

  return (
    <div className="min-h-screen w-full bg-[#f6f6f6] flex flex-col items-start p-6 md:p-16 mx-auto">
      <div className="w-full mb-16">
        <h1 className="text-4xl font-medium mb-2 text-black">
          Choose your treatment plan
        </h1>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <p className="text-gray-600 max-w-2xl">
            Select the subscription that works best for you. Longer plans offer
            more convenience and significant savings.
          </p>
          <BillingToggle
            isAnnual={isAnnualBilling}
            onChange={handleBillingToggle}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {subscriptionPlans.map(plan => (
          <PlanCard
            key={plan.id}
            plan={plan}
            isSelected={selectedPlanId === plan.id}
            isAnnualBilling={isAnnualBilling}
            onSelect={handlePlanSelection}
          />
        ))}
      </div>

      <PromoCode onApply={handleApplyPromo} />
      <CheckoutButton
        selectedPlanId={selectedPlanId}
        discountPercent={discountPercent}
        isAnnualBilling={isAnnualBilling}
      />
      <StatsSection />
      <FAQSection />
    </div>
  );
}
