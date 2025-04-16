"use client";

import { CreditCard } from "lucide-react";
import { useState } from "react";
import { subscriptionPlans, ANNUAL_DISCOUNT } from "@/app/constants";

interface CheckoutButtonProps {
  selectedPlanId: string;
  discountPercent: number;
  isAnnualBilling: boolean;
}

export function CheckoutButton({
  selectedPlanId,
  discountPercent,
  isAnnualBilling,
}: CheckoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const planDuration = selectedPlanId.split("-")[0];

  const selectedPlan = subscriptionPlans.find(
    plan => plan.id === selectedPlanId
  );

  const calculateTotal = () => {
    if (!selectedPlan) return 0;

    let basePrice = 0;
    if (isAnnualBilling) {
      basePrice = selectedPlan.billingCycle.annual * ANNUAL_DISCOUNT;
    } else {
      if (selectedPlanId === "3-month") {
        basePrice = selectedPlan.billingCycle.quarterly || 0;
      } else if (selectedPlanId === "6-month") {
        basePrice = selectedPlan.billingCycle.biannual || 0;
      } else {
        basePrice = selectedPlan.billingCycle.annual;
      }
    }

    if (discountPercent > 0) {
      return basePrice * (1 - discountPercent / 100);
    }

    return basePrice;
  };

  const totalPrice = calculateTotal();
  const formattedTotal = totalPrice.toFixed(2);

  const handleCheckout = async () => {
    setIsLoading(true);

    if (typeof window !== "undefined" && window.analytics) {
      window.analytics.track("checkout_initiated", {
        planId: selectedPlanId,
        total: totalPrice,
      });
    }

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));

      console.log("Checkout successful for plan:", selectedPlanId);
    } catch (error) {
      console.error("Checkout failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-16 w-full">
      <div className="mb-4 text-lg font-semibold">
        Total: ${formattedTotal}
        {discountPercent > 0 && (
          <span className="ml-2 text-green-600 text-sm">
            ({discountPercent}% discount applied)
          </span>
        )}
      </div>

      <button
        className={`rounded cursor-pointer bg-[#00ccbd] hover:bg-[#00b8aa] text-black px-8 py-6 flex items-center justify-center w-full md:w-auto transition-all ${
          isLoading ? "opacity-70 cursor-not-allowed" : ""
        }`}
        onClick={handleCheckout}
        disabled={isLoading}
        aria-label={`Continue with ${planDuration} month plan`}
      >
        {isLoading ? (
          <span className="animate-pulse">Processing...</span>
        ) : (
          <>
            <CreditCard className="mr-2 h-5 w-5" />
            Continue with {planDuration} month plan
          </>
        )}
      </button>

      <div className="mt-4 text-sm text-gray-600 flex flex-wrap justify-center md:justify-start gap-2">
        <div className="flex items-center">
          <span className="mr-1">•</span> Secure payment
        </div>
        <div className="flex items-center">
          <span className="mr-1">•</span> Discreet packaging
        </div>
        <div className="flex items-center">
          <span className="mr-1">•</span> Cancel or change plans anytime
        </div>
      </div>
    </div>
  );
}
