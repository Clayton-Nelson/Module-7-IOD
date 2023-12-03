import React from "react";
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates2() {
  const [currency, setCurrency] = useState(currencies[0]);
  const value = useFetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_" +
      "currencies=" +
      currency,
    currency
  );

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate: {value}</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
    </div>
  );
}

export default BitcoinRates2;
