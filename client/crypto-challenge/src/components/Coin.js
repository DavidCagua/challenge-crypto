import React, { useState, useEffect, Fragment } from "react";
import { LineChart, XAxis, Tooltip, CartesianGrid, Line } from "recharts";
import "./Coin.css";
import Modal from "./Modal.js";
import Button from "./Button.js";
import moment from "moment";

function Coin({ slug, name, logo, quote, circulating_supply, total_supply }) {
  const [dataArray, setdataArray] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  useEffect(() => {
    if (isOpen) {
      fetch(
        `https://api.coingecko.com/api/v3/coins/${slug}/market_chart?vs_currency=usd&days=30&interval=daily`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.prices) {
            let prices = data.prices;
            let array = [];
            prices.forEach((element) => {
              let datems = moment(element[0]).format("DD MMM YYYY");
              let price = element[1];
              let obj = {
                name: `${datems}`,
                price: price,
              };
              array.push(obj);
            });
            setdataArray(array);
          } else {
            console.log("error");
          }
        })
        .catch(() => {
          console.log("errror");
        });
    }
  }, [isOpen, slug, dataArray]);
  return (
    <Fragment>
      <div className="container">
        <p>{name}</p>
        <p>
          <img src={logo} alt="" />
        </p>
        <p>{quote.USD.volume_24h}</p>
        <p>{circulating_supply}</p>
        <p>{total_supply}</p>
        <p>{quote.USD.market_cap}</p>
        <p>
          <Button onClick={openModal} />
        </p>

        <Modal isOpen={isOpen} closeModal={closeModal}>
          <LineChart
            width={400}
            height={400}
            data={dataArray}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <XAxis dataKey="name" />
            <Tooltip />
            <CartesianGrid stroke="#f5f5f5" />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#ff7300"
              yAxisId={0}
            />
          </LineChart>
        </Modal>
      </div>
      <hr />
    </Fragment>
  );
}

export default Coin;
