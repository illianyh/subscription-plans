"use client";

import { useState } from "react";

interface PromoCodeProps {
  onApply: (discount: number) => void;
}

export function PromoCode({ onApply }: PromoCodeProps) {
  const [code, setCode] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleApply = async () => {
    setError(null);
    setSuccess(null);

    if (!code.trim()) {
      setError("Please enter a promo code");
      return;
    }

    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 800));

      if (code.toUpperCase() === "SAVE10") {
        setSuccess("10% discount applied!");
        onApply(10);
      } else if (code.toUpperCase() === "SAVE20") {
        setSuccess("20% discount applied!");
        onApply(20);
      } else {
        setError("Invalid promo code");
      }
    } catch (err) {
      setError("Failed to apply code. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-6 w-full max-w-md">
      <div className="text-sm font-medium mb-2">Have a promo code?</div>
      <div className="flex">
        <input
          type="text"
          value={code}
          onChange={e => setCode(e.target.value)}
          placeholder="Enter code"
          className="flex-1 px-3 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-1 focus:ring-[#00ccbd] focus:border-[#00ccbd]"
          disabled={isLoading}
        />
        <button
          onClick={handleApply}
          disabled={isLoading}
          className="bg-gray-800 text-white px-4 py-2 rounded-r hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "..." : "Apply"}
        </button>
      </div>

      {error && <div className="mt-2 text-red-500 text-sm">{error}</div>}
      {success && <div className="mt-2 text-green-600 text-sm">{success}</div>}

      <div className="mt-2 text-xs text-gray-500">
        Try codes: SAVE10, SAVE20
      </div>
    </div>
  );
}
