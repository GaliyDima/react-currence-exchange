import { useState } from "react";
import { useExchangeRate } from "../../hooks/useFetchCurrency";
import styles from "./Home.module.scss";
import ToInput from "../../components/ToInput/ToInput";
import FromInput from "../../components/FromInput/FromInput";
import exchange from "../../assets/icons/exchange.svg";
import Loading from "../../components/Loading/ToInput";

const HomePage = () => {
  const [from, setFrom] = useState<string>("USD");
  const [into, setInto] = useState<string>("EUR");
  const { data } = useExchangeRate(from);
  const [amountFrom, setAmountFrom] = useState<number>(0);

  const result = data?.conversion_rates?.[into]
    ? amountFrom * data.conversion_rates[into]
    : 0;

  const handleSwapCurrencies = () => {
    const temp = from;
    setFrom(into);
    setInto(temp);
  };

  if (!data) {
    return <Loading />;
  }

  return (
    <div className={styles.root}>
      <h1>Currency exchange</h1>
      <div className={styles.root_card}>
        <FromInput
          amount={amountFrom}
          onAmountChange={setAmountFrom}
          selectedCurrency={from}
          onCurrencyChange={setFrom}
          currencies={Object.keys(data?.conversion_rates ?? {})}
        />
        <img
          onClick={handleSwapCurrencies}
          src={exchange}
          alt="exchange"
          className={styles.root_img}
        />
        <ToInput
          value={into}
          setValue={setInto}
          result={result}
          readonly={true}
        />
      </div>
    </div>
  );
};

export default HomePage;
