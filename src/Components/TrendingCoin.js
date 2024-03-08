import React, { useEffect, useState } from 'react';

const TrendingCoin = () => {
    const [trendingcoin, setTrendingcoin] = useState("");
    const fetchdata = async () => {
        const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
        const data = await response.json();
        console.log(data.coins);
        setTrendingcoin(data.coins);

    }

    useEffect(() => {
        fetchdata();
    }, []);
    return (
        <div className="mx-10 my-10 bg-gray-100 p-8 rounded-lg">
            <h2 className="text-3xl font-semibold mb-4">Trending Coins (24h)</h2>
            {
                Array.isArray(trendingcoin) && trendingcoin.map((coin) => (
                    <div key={coin.coin_id} className="flex items-center mb-4">
                        <img src={coin?.item?.small} alt="Coin Logo" className="w-8 h-8 mr-2" />
                        <p className="mr-2">{coin.name}</p>
                        <span className="text-green-500 mx-[130px]">&#x2B06; {coin.item.data.price_change_percentage_24h.aed}%</span>
                    </div>
                ))
            }


        </div>
    );
}

export default TrendingCoin;

