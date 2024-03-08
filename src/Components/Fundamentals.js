import React from 'react';

const Fundamentals = () => {
    return (
        <div className=' md:mx-10 w-screen md:w-[980px] mb-10 bg-white rounded-lg'>
            <div className="max-w-7xl mx-auto px-4 py-8">
                <h2 className="text-3xl font-semibold mb-4">Fundamentals ®</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-0 md:gap-x-16">
                    <div className="md:mb-0">
                        <div className='flex justify-between'>
                            <h3 className="text-lg font-semibold mb-2">Bitcoin Price</h3>
                            <p>$16,815.46</p>
                        </div>
                        <hr className="my-4 border-t border-gray-300" />
                        <div className='flex justify-between'>
                            <h3 className="text-lg font-semibold mb-2">24h Low / 24h High</h3>
                            <p>$16,382.07 / $16,874.12</p>
                        </div>
                        <hr className="my-4 border-t border-gray-300" />
                        <div className='flex justify-between'>
                            <h3 className="text-lg font-semibold mb-2">7d Low / 7d High</h3>
                            <p>$16,382.07 / $16,874.12</p>
                        </div>
                        <hr className="my-4 border-t border-gray-300" />
                        <div className='flex justify-between'>
                            <h3 className="text-lg font-semibold mb-2">Trading Volume</h3>
                            <p>$23,249,202,782</p>
                        </div>
                        <hr className="my-4 border-t border-gray-300" />
                        <div className='flex justify-between'>
                            <h3 className="text-lg font-semibold mb-2">Market Cap Rank</h3>
                            <p>#1</p>
                        </div>
                        <hr className="my-4 border-t border-gray-300" />
                    </div>
                    <div className="md:ml-0">
                        <div className='flex justify-between'>
                            <h3 className="text-lg font-semibold mb-2">Market Cap</h3>
                            <p>$323,507,290,047</p>
                        </div>
                        <hr className="my-4 border-t border-gray-300" />

                        <div className='flex justify-between'>
                            <h3 className="text-lg font-semibold mb-2">Market Cap Dominance</h3>
                            <p>38.343%</p>
                        </div>
                        <hr className="my-4 border-t border-gray-300" />
                        <div className='flex justify-between'>
                            <h3 className="text-lg font-semibold mb-2">Volume / Market Cap</h3>
                            <p>0.0718</p>
                        </div>
                        <hr className="my-4 border-t border-gray-300" />
                        <div className='flex justify-between'>
                            <h3 className="text-lg font-semibold mb-2">All-Time High</h3>
                            <p>$69,044.77 -75.6%</p>
                        </div>
                        <hr className="my-4 border-t border-gray-300" />
                        <div className='flex justify-between'>
                            <h3 className="text-lg font-semibold mb-2">All-Time Low</h3>
                            <p>Nov 10, 2021 (about 1 year)</p>
                        </div>
                        <hr className="my-4 border-t border-gray-300" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Fundamentals;
