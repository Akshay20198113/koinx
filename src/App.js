import React from 'react'
import Headers from './Components/Header';
import TradingViewWidget from './Components/TradingViewWidget';
import Navbar from './Components/Navbar';
import Add from './Components/Add';
import TrendingCoin from './Components/TrendingCoin';
import CoinWithGraph from './Components/CoinWithGraph';

function App() {
  return (
    <div className='w-screen h-auto bg-gray-300'>
      <Navbar />
      <div>
        <div className='md:flex'>
          <div>
            <TradingViewWidget />
            <Headers />
          </div>
          <div>
            <Add />
            <TrendingCoin />
          </div>
        </div>
        <CoinWithGraph />
      </div>
    </div>
  )
}

export default App;
