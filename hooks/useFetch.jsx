import { useState, useEffect } from "react";

export function useFetch(url, currency) {
  const [data, setData] = useState(null)
  useEffect(() => {
    if (url) {
      let ignore = false;
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          const lowercaseCurrency = currency.toLowerCase();

          if (!ignore) setData(json.bitcoin[lowercaseCurrency]);
          console.log(json.bitcoin[lowercaseCurrency]);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
        return () => {
            ignore = true;
            console.log("cleanup effect");
          };
        }
    }, [currency]);

  return data;
}