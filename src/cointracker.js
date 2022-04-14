import { useEffect, useState } from "react";

function Cointracker() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((reponse) => reponse.json()) //reponse로 부터 json 추출
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []); //[]를 비워두면 해당 코드는 한번만 작동
  return (
    <div>
      <h1>The Coins!{loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option key={coin.id}>
              {coin.name}({coin.symbol}) : {coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}

      <div></div>
    </div>
  );
}

export default Cointracker;
