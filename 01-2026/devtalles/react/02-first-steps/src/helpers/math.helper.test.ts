import { describe, expect, test } from "vitest";
import { add, divide, multiply, substract } from "./math.helper";

const numOne = 6;
const numTwo = 2;

/* test("should be a template", () => {
  // ! Arrange
    const a = 1;
    const b = 2;
  // ! Act
    const result = add(a,b)
  // ! Assert
    expect(result).toBe(3)
    expect(result).toBeTypeOf('number')
}); */

describe("Requirements previous math operations", () => {
  test("should both numbers to be positive", () => {
    expect(add(numOne, numTwo)).toBeTypeOf("number");
    expect(numOne).toBeGreaterThan(0);
    expect(numTwo).toBeGreaterThan(0);
  });
});

describe("Math operations", () => {
  test("should add two numbers", () => {
    expect(add(numOne, numTwo)).toBe(8);
  });

  test("should substract two numbers", () => {
    expect(substract(numOne, numTwo)).toBe(4);
  });

  test("should multiply two numbers", () => {
    expect(multiply(numOne, numTwo)).toBe(12);
  });

  test("should divide two numbers", () => {
    expect(divide(numOne, numTwo)).toBe(3);
  });
});
