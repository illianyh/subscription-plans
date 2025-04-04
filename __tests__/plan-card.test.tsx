"use client";

import { render, screen, fireEvent } from "@testing-library/react";
import { PlanCard } from "@/components/subscription/plan-card";

const MOCK_PLAN = {
  id: "6-month",
  name: "6 Month Plan",
  price: 25,
  description: "Our most popular plan",
  features: ["Cancel anytime", "Free shipping", "Discreet packaging"],
  popular: true,
  billingCycle: {
    monthly: 25,
    biannual: 150,
    annual: 300,
  },
};

const mockOnSelect = jest.fn();

describe("<PlanCard />", () => {
  beforeEach(() => {
    mockOnSelect.mockClear();
  });

  test("renders plan details correctly", () => {
    render(
      <PlanCard
        plan={MOCK_PLAN}
        isSelected={false}
        isAnnualBilling={false}
        onSelect={mockOnSelect}
      />
    );

    expect(screen.getByText("6 Month Plan")).toBeInTheDocument();
    expect(screen.getByText("Our most popular plan")).toBeInTheDocument();
    expect(screen.getByText("£25")).toBeInTheDocument();
    expect(screen.getByText("MOST POPULAR")).toBeInTheDocument();

    expect(screen.getByText("Cancel anytime")).toBeInTheDocument();
    expect(screen.getByText("Free shipping")).toBeInTheDocument();
    expect(screen.getByText("Discreet packaging")).toBeInTheDocument();

    expect(screen.getByText("Select Plan")).toBeInTheDocument();
  });

  test("shows correct price with annual billing", () => {
    render(
      <PlanCard
        plan={MOCK_PLAN}
        isSelected={false}
        isAnnualBilling={true}
        onSelect={mockOnSelect}
      />
    );

    expect(screen.getByText("£20")).toBeInTheDocument();
    expect(screen.getByText("Billed £240 annually")).toBeInTheDocument();
  });

  test("shows selected state correctly", () => {
    render(
      <PlanCard
        plan={MOCK_PLAN}
        isSelected={true}
        isAnnualBilling={false}
        onSelect={mockOnSelect}
      />
    );

    expect(screen.getByText("Selected")).toBeInTheDocument();
  });

  test("calls onSelect when button is clicked", () => {
    render(
      <PlanCard
        plan={MOCK_PLAN}
        isSelected={false}
        isAnnualBilling={false}
        onSelect={mockOnSelect}
      />
    );

    fireEvent.click(screen.getByText("Select Plan"));
    expect(mockOnSelect).toHaveBeenCalledWith("6-month");
  });

  test("shows savings text for 6-month plan", () => {
    render(
      <PlanCard
        plan={MOCK_PLAN}
        isSelected={false}
        isAnnualBilling={false}
        onSelect={mockOnSelect}
      />
    );

    expect(screen.getByText("Save £60")).toBeInTheDocument();
    expect(screen.getByText("compared to monthly")).toBeInTheDocument();
  });

  test("does not show savings text with annual billing", () => {
    render(
      <PlanCard
        plan={MOCK_PLAN}
        isSelected={false}
        isAnnualBilling={true}
        onSelect={mockOnSelect}
      />
    );

    expect(screen.queryByText("Save £60")).not.toBeInTheDocument();
  });
});
