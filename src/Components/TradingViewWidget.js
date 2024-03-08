import React, { useEffect, useRef, memo } from 'react';
import BitcoinDetail from './BitcoinDetail';

function TradingViewWidget() {
    const container = useRef();
    console.log("hello");
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = `
        {
          "autosize": true,
          "symbol": "BITSTAMP:BTCUSD",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "",
          "locale": "en",
          "enable_publishing": false,
          "allow_symbol_change": true,
          "hide_top_toolbar": true,
          "save_image": false,
          "calendar": false,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }`;
        console.log("Aksha");
        container.current.appendChild(script);
    }, []); // Empty dependency array ensures this effect runs only once

    return (
        <div className='md:mx-10 my-10 w-screen md:w-[980px] h-[400px] bg-white rounded-lg'>
            <BitcoinDetail />
            <div className="tradingview-widget-container w-screen" ref={container}>
                <div className="tradingview-widget-container__widget"></div>
                <div className="tradingview-widget-copyright">
                    <a href="https://www.tradingview.com/" rel="noopener nofollow noreferrer" target="_blank">
                        <span className="blue-text">Track all markets on TradingView</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default memo(TradingViewWidget);
