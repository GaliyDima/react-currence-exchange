import React from "react";
import styles from "./FromInput.module.scss";

interface FromInputProps {
  amount: number;
  onAmountChange: (amount: number) => void;
  selectedCurrency: string;
  onCurrencyChange: (currency: string) => void;
  currencies: string[];
}

const FromInput: React.FC<FromInputProps> = ({
  amount,
  onAmountChange,
  selectedCurrency,
  onCurrencyChange,
  currencies,
}) => {
  return (
    <div className={styles.root}>
      <input
        type="text"
        name="text"
        placeholder="Type here..."
        value={amount}
        onChange={(e) => onAmountChange(Number(e.target.value))}
        className={styles.root_input}
      />
      <select
        value={selectedCurrency}
        onChange={(e) => onCurrencyChange(e.target.value)}
        className={styles.root_select}
      >
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FromInput;
