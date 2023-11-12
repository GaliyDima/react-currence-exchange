import React from "react";
import styles from "./ToInput.module.scss";
import { useExchangeRate } from "../../hooks/useFetchCurrency";

interface ToInputProps {
  value: string;
  setValue: (e: string) => void;
  result: number;
  onChange?: (e: any) => void;
  readonly?: boolean;
}

const ToInput: React.FC<ToInputProps> = ({
  value,
  setValue,
  result,
  onChange,
  readonly = false,
}) => {
  const { data } = useExchangeRate(value);

  // Check if data is defined before attempting to destructure
  const conversionRates = data?.conversion_rates ?? {};

  return (
    <div className={styles.root}>
      <input
        type="text"
        name="text"
        className={styles.root_input}
        placeholder="Type here..."
        value={result}
        onChange={onChange}
        readOnly={readonly}
      />
      <select
        value={value}
        className={styles.root_select}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      >
        {Object.keys(conversionRates).map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ToInput;
