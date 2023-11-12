import React, { useState } from "react";
import { useExchangeRate } from "../../hooks/useFetchCurrency";
import { getEmojiFlag } from "@cprecioso/country-flag-emoji";
import styles from "./Rates.module.scss";
import Loading from "../../components/Loading/ToInput";

const RatesPage = () => {
  const [from, setFrom] = useState<string>("USD");
  const { data, error } = useExchangeRate(from);
  const [amountFrom, setAmountFrom] = useState<number>(0);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <Loading />;
  }

  const calculateAmounts = () => {
    const amounts: Record<string, number> = {};
    for (const currency in data.conversion_rates) {
      amounts[currency] = amountFrom * data.conversion_rates[currency];
    }
    return amounts;
  };

  const amounts = calculateAmounts();

  return (
    <div className={styles.root}>
      <h1>Conversion Rates</h1>
      <div>
        <input
          type="text"
          name="text"
          className={styles.root_input}
          placeholder="Type here..."
          value={amountFrom}
          onChange={(e) => setAmountFrom(Number(e.target.value))}
        />
        <select
          className={styles.root_select}
          value={from}
          onChange={(e) => {
            setFrom(e.target.value);
          }}
        >
          {Object.keys(data.conversion_rates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.root_result}>
        <h2>Conversion Amounts</h2>
        <ul>
          {Object.entries(amounts).map(([currency, amount]) => (
            <li key={currency}>
              <span className="flag">{getEmojiFlag(currency)}</span>
              {`${currency}: ${amount}`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RatesPage;
