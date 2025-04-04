"use client"

interface BillingToggleProps {
  isAnnual: boolean
  onChange: (isAnnual: boolean) => void
}

export function BillingToggle({ isAnnual, onChange }: BillingToggleProps) {
  return (
    <div className="flex items-center gap-2">
      <label htmlFor="annual-billing" className="text-sm text-gray-600">
        Monthly billing
      </label>
      <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out">
        <input
          type="checkbox"
          id="annual-billing"
          className="opacity-0 w-0 h-0 absolute"
          checked={isAnnual}
          onChange={(e) => onChange(e.target.checked)}
        />
        <label
          htmlFor="annual-billing"
          className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 rounded-full transition-all duration-200 ${
            isAnnual ? "bg-[#00ccbd]" : "bg-gray-300"
          }`}
        >
          <span
            className={`absolute h-5 w-5 left-0.5 bottom-0.5 bg-white rounded-full transition-all duration-200 ${
              isAnnual ? "translate-x-6" : "translate-x-0"
            }`}
          />
        </label>
      </div>
      <label htmlFor="annual-billing" className="text-sm font-medium">
        Annual billing
        <span className="text-xs bg-[#00ccbd] text-black px-1.5 py-0.5 rounded-sm ml-1">Save 20%</span>
      </label>
    </div>
  )
}

