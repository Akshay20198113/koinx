import React from 'react'

const Overview = () => {
    return (
        <div className='md:mx-10 w-screen md:w-[980px] mt-10 bg-white rounded-lg '>
            <div className="max-w-7xl mx-auto px-4 py-8">
                <h2 className="text-3xl font-semibold mb-4">Performance</h2>
                <div className='flex items-center my-10'>
                    <span className="font-semibold">
                        <div>Today's Low</div>
                        <div>46,930.22</div>
                    </span>
                    <div className="bg-gradient-to-r from-red-600 via-yellow-400 to-green-500 w-2/3 h-2 mx-10 rounded-3xl"></div>
                    <span className="font-semibold">
                        <div>Today's High</div>
                        <div>49,343.83</div>
                    </span>
                </div>
                <div className='flex items-center'>
                    <span className="font-semibold">
                        <div>52W Low</div>
                        <div>16,930.22</div>
                    </span>
                    <div className="bg-gradient-to-r from-red-600 via-yellow-400 to-green-500 w-2/3 h-2 mx-14 rounded-3xl"></div>
                    <span className="font-semibold">
                        <div>52W High</div>
                        <div>49,743.83</div>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Overview