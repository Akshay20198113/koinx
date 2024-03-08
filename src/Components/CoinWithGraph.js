import React, { useEffect, useState } from 'react'

const CoinWithGraph = () => {
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

    const getGridColumns = () => {
        if (window.innerWidth < 300) {
            return 'grid-cols-1';
        } else if (window.innerWidth < 600) {
            return 'grid-cols-2';
        }
        else if (window.innerWidth < 1024) {
            return 'grid-cols-3';
        } else if (window.innerWidth < 1280) {
            return 'grid-cols-5';
        } else {
            return 'grid-cols-6';
        }
    };

    window.addEventListener('resize', () => {
        setGridColumns(getGridColumns());
    });

    const [gridColumns, setGridColumns] = useState(getGridColumns());

    return (
        <div className='bg-white w-screen my-10'>
            <h1 className='mx-5 my-5 text-3xl' >Trending Coins</h1>
            <div className={`grid ${gridColumns} gap-5`}>
                {
                    Array.isArray(trendingcoin) && trendingcoin.map((coin) => (
                        <div key={coin.coin_id} className="w-full sm:w-60 mx-5 rounded-lg" style={{ border: '1px solid grey', padding: '10px' }}>
                            <div className='flex'>
                                <img src={coin?.item?.small} alt="Coin Logo" className="w-8 h-8 mr-2" />
                                <div className="mr-2 text-black">{coin.item.symbol}</div>
                                <div className={` ${coin.item.data.price_change_percentage_24h.aed > 0 ? 'text-green-500' : 'text-red-500'}`}>
                                    {coin.item.data.price_change_percentage_24h.aed > 0 ? `+${coin.item.data.price_change_percentage_24h.aed.toFixed(3)}` : coin.item.data.price_change_percentage_24h.aed.toFixed(3)}%
                                </div>
                            </div>
                            <div> {coin.item.data.price}</div>
                            <img src='https://www.coingecko.com/coins/26412/sparkline.svg' alt='graph' />
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default CoinWithGraph;
