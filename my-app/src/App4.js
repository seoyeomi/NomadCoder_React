import { useState, useEffect } from "react";

function App4() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [usd, setUsd] = useState([]);

  const onChange = (event) => {
    setUsd(event.target.value);
  };

  const reset = () => {
    setUsd(0);
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={onChange}>
          {coins.map((coin) => (
            <option key={coin.id}>
              {coin.name} {coin.symbol} : ${coin.quotes.USD.price}
            </option>
          ))}
        </select>
      )}

      <div>
        USD:
        <input
          type="number"
          placeholder="Write your $USD"
          value={usd}
          onChange={onChange}
        />
      </div>

      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={onChange}>
          {coins.map((coin) => (
            <option key={coin.id}>
              {coin.name} {coin.symbol} : ${usd / coin.quotes.USD.price}
            </option>
          ))}
        </select>
      )}

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App4;
