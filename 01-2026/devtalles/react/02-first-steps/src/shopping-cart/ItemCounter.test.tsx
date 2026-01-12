import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";
import { fireEvent, render, screen } from "@testing-library/react";

describe("ItemCounter", () => {
  const name = "Test item";
  const quantity = 10;

  test("should render with default values", () => {
    render(<ItemCounter name={name} />);

    expect(screen.getByText(name)).toBeDefined();
    expect(screen.getByText(name)).not.toBeNull();
  });

  test("should render with custom quantity", () => {
    render(<ItemCounter name={name} quantity={quantity} />);

    expect(screen.getByText(quantity)).toBeDefined();
  });

  test("should increase count when +1 button is pressed", () => {
    render(<ItemCounter name={name} quantity={quantity} />);

    const [buttonAdd] = screen.getAllByRole("button");

    fireEvent.click(buttonAdd);

    expect(screen.getByText("11")).toBeDefined();
  });

  test("should decrease count when -1 button is pressed", () => {
    render(<ItemCounter name={name} quantity={quantity} />);

    const [, buttonSubstract] = screen.getAllByRole("button");

    fireEvent.click(buttonSubstract);

    expect(screen.getByText("9")).toBeDefined();
  });

  test("should not decrease count under zero", () => {
    const quantity = 0;

    render(<ItemCounter name={name} quantity={quantity} />);

    const [, buttonSubstract] = screen.getAllByRole("button");

    fireEvent.click(buttonSubstract);
    fireEvent.click(buttonSubstract);

    const value = Number(buttonSubstract.previousElementSibling?.innerHTML);

    expect(value).toBeGreaterThanOrEqual(0);
  });

  test("should change text color to red when count is zero", () => {
    const quantity = 0;

    render(<ItemCounter name={name} quantity={quantity} />);

    const itemText = screen.getByText(name);

    const textColor = itemText.style.color;

    expect(textColor).toBe("red");
  });

  test("should change text color to black when count is bigger than zero", () => {
    const quantity = 1;

    render(<ItemCounter name={name} quantity={quantity} />);

    const itemText = screen.getByText(name);

    const textColor = itemText.style.color;

    expect(textColor).toBe("black");
  });
});
