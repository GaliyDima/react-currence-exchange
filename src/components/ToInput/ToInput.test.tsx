import React from "react";
import { render, screen } from "@testing-library/react";
import ToInput from "./ToInput";
import { useExchangeRate } from "../../hooks/useFetchCurrency";

jest.mock("../../hooks/useFetchCurrency");

describe("ToInput Component", () => {
  it("renders the correct result in the input field", () => {
    (useExchangeRate as jest.Mock).mockReturnValue({
      data: { conversion_rates: { USD: 1, EUR: 0.85 } },
    });

    const mockSetValue = jest.fn();

    render(
      <ToInput
        value="USD"
        setValue={mockSetValue}
        result={1.234}
        onChange={() => {}}
        readonly={false}
      />
    );

    const inputElement = screen.getByRole("textbox") as HTMLInputElement;
    expect(inputElement.value).toBe("1.234");
  });
});
