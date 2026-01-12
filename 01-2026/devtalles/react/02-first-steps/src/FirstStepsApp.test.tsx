import { afterEach, describe, expect, test, vi } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";
import { render, screen } from "@testing-library/react";

const mockItemCounter = vi.fn((props: unknown) => {
  return <div data-testid="ItemCounter" />;
});

vi.mock("./shopping-cart/ItemCounter", () => ({
  ItemCounter: (props: unknown) => mockItemCounter(props),
}));

/* vi.mock("./shopping-cart/ItemCounter", () => ({
  ItemCounter: (props: unknown) => (
    <div data-testid="ItemCounter" name={props.name} quantity={props.quantity} />
  ),
})); */

describe("FirstStepsApp", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test("should match snapshoot", () => {
    const { container } = render(<FirstStepsApp />);

    expect(container).toMatchSnapshot();
  });

  test("should render the correct number of ItemCounter components", () => {
    render(<FirstStepsApp />);

    const itemCounters = screen.getAllByTestId("ItemCounter");

    expect(itemCounters.length).toBe(5);

    screen.debug();
  });

  test("should have a heading of level one", () => {
    render(<FirstStepsApp />);

    const titleText = screen.getByRole("heading", { level: 1 }).innerHTML;

    expect(titleText).toBe("Carrito de compras");
  });

  test("should render ItemCounter with correct props", () => {
    render(<FirstStepsApp />);

    expect(mockItemCounter).toHaveBeenCalledTimes(5);
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "Nintendo Switch 2",
      quantity: undefined,
    });
    // Continue to test with the other Items
  });
});
