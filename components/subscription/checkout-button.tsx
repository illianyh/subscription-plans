import { CreditCard } from "lucide-react";

interface CheckoutButtonProps {
  selectedPlanId: string;
}

export function CheckoutButton({ selectedPlanId }: CheckoutButtonProps) {
  const planDuration = selectedPlanId.split("-")[0];

  return (
    <div className="mt-16 w-full">
      <button className="rounded cursor-pointer bg-[#00ccbd] hover:bg-[#00b8aa] text-black px-8 py-6 flex items-center justify-center">
        <CreditCard className="mr-2 h-5 w-5" />
        Continue with {planDuration} month plan
      </button>

      <div className="mt-4 text-sm text-gray-600">
        Secure payment • Discreet packaging • Cancel or change plans anytime
      </div>
    </div>
  );
}
