import { useEffect, useState } from "react";
import axios from "axios";

interface ExchangeRateData {
  conversion_rates: Record<string, number>;
}

const BaseUrl = "https://v6.exchangerate-api.com/v6";
const API_KEY = "628a30e65a1096f58d083a3b";

export const useExchangeRate = (currency: string) => {
  const [data, setData] = useState<ExchangeRateData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${BaseUrl}/${API_KEY}/latest/${currency}`
        );
        if (response.data && response.data.conversion_rates) {
          setData(response.data);
          setError(null);
        } else {
          setError("Invalid data structure in the response");
        }
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
        setError("Failed to fetch exchange rates");
      }
    };

    fetchData();
  }, [currency]);

  return { data, error };
};
