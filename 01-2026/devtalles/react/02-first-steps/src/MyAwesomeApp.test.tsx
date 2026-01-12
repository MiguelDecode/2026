import { describe, expect, test } from "vitest";
import { MyAwesomeApp } from "./MyAwesomeApp";
import { render, screen } from "@testing-library/react";

describe("MyAwesomeApp", () => {
  test("should render firstName and lastName", () => {
    const { container } = render(<MyAwesomeApp />);

    const h1 = container.querySelector("h1")?.innerHTML;
    const h3 = container.querySelector("h3")?.innerHTML;

    expect(h1).toContain("Miguel");
    expect(h3).toContain("Decode");
  });

  test("should render firstName and lastName - Screen", () => {
    render(<MyAwesomeApp />);

    screen.debug();

    const h1 = screen.getByTestId("first-name-title");

    expect(h1.innerHTML).toContain("Miguel");
  });

  test("should match the snapshoot", () => {
    const { container } = render(<MyAwesomeApp />);

    expect(container).toMatchSnapshot();
  });
});
