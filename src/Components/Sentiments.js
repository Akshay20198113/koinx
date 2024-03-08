import React, { useState } from 'react';

const Sentiments = () => {
    const [currentEvent, setCurrentEvent] = useState(0);

    const keyEvents = [
        {
            bgColor: "#ADEBFA",
            imgesrc: "https://dejpknyizje2n.cloudfront.net/marketplace/products/02ac4e8ff5bc40ec8db5e5c4c6d74e6c.png",
            heading: "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim",
            description: "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim."
        },
        {
            bgColor: "#B9FBE0",
            imgesrc: "",
            heading: "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim",
            description: "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim."
        },
        {
            bgColor: "#ADEBFA",
            imgesrc: "",
            heading: "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim",
            description: "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim."
        },
        {
            bgColor: "#B9FBE0",
            imgesrc: "",
            heading: "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim",
            description: "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim."
        }
    ];

    const handlePrev = () => {
        setCurrentEvent(prevState => (prevState === 0 ? keyEvents.length - 1 : prevState - 1));
    };

    const handleNext = () => {
        setCurrentEvent(prevState => (prevState === keyEvents.length - 1 ? 0 : prevState + 1));
    };

    return (
        <div className='md:mx-10 w-screen md:w-[980px] my-10 bg-white rounded-lg'>
            <div className="max-w-7xl mx-auto px-4 py-8 relative">
                <h2 className="text-3xl font-semibold mb-4">Sentiment</h2>
                <h3>Key Events</h3>
                <button className={`absolute z-30 top-64 left-0 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 ${currentEvent === 0 ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={handlePrev} disabled={currentEvent === 0}>
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                </button>
                <button className={`absolute z-30 top-64 right-0 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 ${currentEvent === keyEvents.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={handleNext} disabled={currentEvent === keyEvents.length - 1}>
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>
                <div className="overflow-hidden mt-12">
                    <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentEvent * 100}%)` }}>
                        {keyEvents.map((event, index) => (
                            <div key={index} className={`flex-shrink-0 bg-green-300 w-full mx-1 rounded-lg p-10`} style={{ backgroundColor: event.bgColor }}>
                                <div className='flex'>
                                    <div className='mr-4'>
                                        <img src={event.imgesrc} alt='Hello' className='rounded-full bg-blue-600' />
                                    </div>
                                    <div>
                                        <h1 className='text-2xl'>{event.heading}</h1>
                                        <p className="">{event.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mt-8">Analyst Estimates</h3>
                    <div className="flex my-10">
                        <div className='w-20 h-20 md:w-36 md:h-36 bg-green-200 rounded-full flex justify-center items-center'>
                            <p className="text-4xl text-green-500">76%</p>
                        </div>
                        <div className='mx-10 mt-4 w-full'>
                            <div className='flex items-center'>
                                <span className="font-semibold">Buy</span>
                                <div className="bg-green-600 w-1/2 h-2 mx-2"></div>
                                <span className="text-3xl">76%</span>
                            </div>

                            <div className='flex items-center'>
                                <span className="font-semibold">Hold</span>
                                <div className="bg-gray-400 w-1/6 h-2 mx-2"></div>
                                <span className="text-3xl">8%</span>
                            </div>
                            <div className='flex items-center'>
                                <span className="font-semibold">Sell</span>
                                <div className="bg-red-600 w-2/6 h-2 mx-2"></div>
                                <span className="text-3xl">16%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sentiments;
