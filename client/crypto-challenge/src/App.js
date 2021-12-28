import React, { useEffect, useState, Fragment } from "react";
import Coin from "./components/Coin.js";
import "./App.css";

function App() {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/coins")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCoins(data);
      })
      .catch(() => {
        console.log("error");
      });
  }, []);
  return (
    <Fragment>
      <div className="App">
        <div className="header">
          <p>Name</p>
          <p>Logo</p>
          <p> 24 h volume</p>
          <p>circulating supply</p>
          <p>Total supply</p>
          <p>Market cap</p>
        </div>
        {coins.length > 0 ? (
          coins.map(
            ({
              id,
              name,
              slug,
              logo,
              quote,
              circulating_supply,
              total_supply,
            }) => {
              return (
                <Coin
                  key={id}
                  id={id}
                  name={name}
                  slug={slug}
                  logo={logo}
                  quote={quote}
                  circulating_supply={circulating_supply}
                  total_supply={total_supply}
                />
              );
            }
          )
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </Fragment>
  );
}

export default App;
