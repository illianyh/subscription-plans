import { render, screen } from "@testing-library/react";
import { CheckoutButton } from "@/components/subscription/checkout-button";
import { ANNUAL_DISCOUNT } from "@/app/constants";

describe("<CheckoutButton />", () => {
  it("renders correctly with 3-month plan", () => {
    render(
      <CheckoutButton
        selectedPlanId="3-month"
        discountPercent={0}
        isAnnualBilling={false}
      />
    );

    expect(screen.getByText("Continue with 3 month plan")).toBeInTheDocument();
  });

  it("renders correctly with 6-month plan", () => {
    render(
      <CheckoutButton
        selectedPlanId="6-month"
        discountPercent={0}
        isAnnualBilling={false}
      />
    );

    expect(screen.getByText("Continue with 6 month plan")).toBeInTheDocument();
  });

  it("renders correctly with 12-month plan", () => {
    render(
      <CheckoutButton
        selectedPlanId="12-month"
        discountPercent={0}
        isAnnualBilling={false}
      />
    );

    expect(screen.getByText("Continue with 12 month plan")).toBeInTheDocument();
  });

  describe("calculateTotal", () => {
    it("calculates correct quarterly price for 3-month plan", () => {
      render(
        <CheckoutButton
          selectedPlanId="3-month"
          discountPercent={0}
          isAnnualBilling={false}
        />
      );
      expect(screen.getByText("Total: $90.00")).toBeInTheDocument();
    });

    it("calculates correct biannual price for 6-month plan", () => {
      render(
        <CheckoutButton
          selectedPlanId="6-month"
          discountPercent={0}
          isAnnualBilling={false}
        />
      );
      expect(screen.getByText("Total: $150.00")).toBeInTheDocument();
    });

    it("calculates correct annual price for 12-month plan", () => {
      render(
        <CheckoutButton
          selectedPlanId="12-month"
          discountPercent={0}
          isAnnualBilling={false}
        />
      );
      expect(screen.getByText("Total: $240.00")).toBeInTheDocument();
    });

    it("applies annual discount when isAnnualBilling is true", () => {
      render(
        <CheckoutButton
          selectedPlanId="12-month"
          discountPercent={0}
          isAnnualBilling={true}
        />
      );
      expect(screen.getByText("Total: $192.00")).toBeInTheDocument();
    });

    it("applies percentage discount correctly", () => {
      render(
        <CheckoutButton
          selectedPlanId="6-month"
          discountPercent={10}
          isAnnualBilling={false}
        />
      );
      expect(screen.getByText("Total: $135.00")).toBeInTheDocument();
    });

    it("applies both annual discount and percentage discount", () => {
      render(
        <CheckoutButton
          selectedPlanId="12-month"
          discountPercent={15}
          isAnnualBilling={true}
        />
      );
      expect(screen.getByText("Total: $163.20")).toBeInTheDocument();
    });
  });
});
