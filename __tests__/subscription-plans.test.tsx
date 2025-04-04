import { render, screen, fireEvent } from "@testing-library/react";
import SubscriptionPlans from "@/app/subscription-plans";

describe("<SubscriptionPlans />", () => {
  test("renders all plan options", () => {
    render(<SubscriptionPlans />);

    expect(screen.getByText("Choose your treatment plan")).toBeInTheDocument();
    expect(screen.getByText("3 Month Plan")).toBeInTheDocument();
    expect(screen.getByText("6 Month Plan")).toBeInTheDocument();
    expect(screen.getByText("12 Month Plan")).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Selected" })
    ).toBeInTheDocument();
    expect(screen.getByText("Continue with 6 month plan")).toBeInTheDocument();
  });

  test("can select a different plan", () => {
    render(<SubscriptionPlans />);

    // Get all buttons and find the one next to "12 Month Plan"
    const allButtons = screen.getAllByRole("button");
    // Find all Select Plan buttons
    const selectPlanButtons = allButtons.filter(
      button => button.textContent === "Select Plan"
    );

    fireEvent.click(selectPlanButtons[1]);

    expect(screen.getByText("Continue with 12 month plan")).toBeInTheDocument();
  });

  test("toggling billing cycle updates prices", () => {
    render(<SubscriptionPlans />);

    expect(screen.getByText("£25")).toBeInTheDocument();

    const billingToggle = screen.getByRole("checkbox");
    fireEvent.click(billingToggle);

    expect(screen.getByText("£20")).toBeInTheDocument();
  });
});
