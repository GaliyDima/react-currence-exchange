import { renderHook } from "@testing-library/react-hooks";
import axios, { AxiosResponse } from "axios";
import { useExchangeRate } from "./useFetchCurrency";

jest.mock("axios");

const mockData = {
  conversion_rates: {
    USD: 1.23,
    EUR: 0.89,
    GBP: 0.78,
  },
};

describe("useExchangeRate", () => {
  it("fetches data successfully", async () => {
    (axios.get as jest.Mock).mockResolvedValueOnce({
      data: mockData,
    } as AxiosResponse);

    const { result, waitForNextUpdate } = renderHook(() =>
      useExchangeRate("USD")
    );

    await waitForNextUpdate();

    expect(result.current.data).toEqual(mockData);
    expect(result.current.error).toBeNull();
  });
});
