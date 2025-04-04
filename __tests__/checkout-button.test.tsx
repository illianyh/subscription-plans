import { render, screen } from "@testing-library/react";
import { CheckoutButton } from "@/components/subscription/checkout-button";

describe("<CheckoutButton />", () => {
  it("renders correctly with 3-month plan", () => {
    render(<CheckoutButton selectedPlanId="3-month" />);

    expect(screen.getByText("Continue with 3 month plan")).toBeInTheDocument();
  });

  it("renders correctly with 6-month plan", () => {
    render(<CheckoutButton selectedPlanId="6-month" />);

    expect(screen.getByText("Continue with 6 month plan")).toBeInTheDocument();
  });

  it("renders correctly with 12-month plan", () => {
    render(<CheckoutButton selectedPlanId="12-month" />);

    expect(screen.getByText("Continue with 12 month plan")).toBeInTheDocument();
  });
});
