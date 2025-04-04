"use client";

import { render, screen, fireEvent } from "@testing-library/react";
import { BillingToggle } from "@/components/subscription/billing-toggle";

const mockOnChange = jest.fn();

describe("<BillingToggle />", () => {
  beforeEach(() => {
    mockOnChange.mockClear();
  });

  test("renders correctly with monthly billing selected", () => {
    render(<BillingToggle isAnnual={false} onChange={mockOnChange} />);

    const toggle = screen.getByRole("checkbox");
    expect(toggle).not.toBeChecked();
  });

  test("renders correctly with annual billing selected", () => {
    render(<BillingToggle isAnnual={true} onChange={mockOnChange} />);

    const toggle = screen.getByRole("checkbox");
    expect(toggle).toBeChecked();
  });

  test("calls onChange when toggle is clicked", () => {
    render(<BillingToggle isAnnual={false} onChange={mockOnChange} />);

    const toggle = screen.getByRole("checkbox");
    fireEvent.click(toggle);

    expect(mockOnChange).toHaveBeenCalledWith(true);
  });
});
