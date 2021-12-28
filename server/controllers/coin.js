import axios from "axios";

export const getCoins = async (req, res) => {
  try {
    let qs = `?sort=market_cap_by_total_supply_strict&start=1&limit=10`;
    let info = {};
    let coins = await axios.get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest" +
        qs,
      {
        headers: {
          "X-CMC_PRO_API_KEY": "7079d355-f34d-4aff-a305-1a71ea2e75ed",
        },
      }
    );
    coins = coins.data.data;
    // console.log(coins.data.data);
    for (let index = 0; index < coins.length; index++) {
      const element = coins[index];
      info = await axios.get(
        `https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?id=${element.id}`,
        {
          headers: {
            "X-CMC_PRO_API_KEY": "71bac2b3-9ecb-4fa3-8033-83edf7a3e119",
          },
        }
      );
      info = info.data.data;
      coins[index].logo = info[element.id].logo;
    }
    res.status(200).json(coins);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getHistory = async (req, res) => {
  let coins = await axios.get(
    "https://api.coingecko.com/api/v3/coins/1/tickers"
  );

  // console.log(coins.data);
  console.log(req);
};
