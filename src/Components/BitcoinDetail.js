import React, { useEffect, useState } from 'react';


const BitcoinDetail = () => {

    const [bitCoindata, setBitCoinData] = useState("");
    const fetchdata = async () => {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true');
        const data = await response.json();
        setBitCoinData(data.bitcoin);
    }

    useEffect(() => {
        fetchdata();
    }, []);


    return (
        <div className="my-10 py-10 w-screen md:w-[980px]">
            <div className='flex items-center'>
                <div className='mx-5'>
                    <img alt='image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/20px-Bitcoin.svg.png' />
                </div>
                <div>
                    <span>Bitcoin</span>
                    <span className='mx-3'>BTC</span>
                </div>
                <div className="text-lg bg-slate-500 p-1 rounded-lg mx-6">Rank #1</div>
            </div>
            <div className='flex items-center mx-7 mt-10'>
                <div>
                    <div className='text-4xl'>${(bitCoindata.usd)} </div>
                    <div> ₹{(bitCoindata.inr)}</div>
                </div>
                <div className='mx-10'>
                    <span className='mx-4 text-green-500 bg-green-200'>51%</span>
                    <span>24H</span>
                </div>
            </div>
        </div>
    );
}

export default BitcoinDetail;
