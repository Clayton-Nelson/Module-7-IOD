import React from "react";
import { useState, useEffect } from "react";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [value, setValue] = useState(null)

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  useEffect(() => {
    console.log("running effect");
    let ignore = false;

    fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_" +
        "currencies=" +
        currency
    )
      .then((response) => response.json())
      .then((json) => {
        const lowercaseCurrency = currency.toLowerCase(); //i couldnt figure out that this code wasnt working for an entire day because i forgot to lowercase it

        if (!ignore) setValue(json.bitcoin[lowercaseCurrency]);
        console.log(json.bitcoin[lowercaseCurrency])
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    return () => {
      ignore = true;
      console.log("cleanup effect");
    };
  }, [currency]);

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

export default BitcoinRates;