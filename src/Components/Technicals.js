import React from 'react';

const Technicals = () => {
    return (
        <div className='md:mx-10 w-screen md:w-[980px] my-10 bg-white rounded-lg'>
            <div className="max-w-7xl mx-auto px-4 py-8">
                <h2 className="text-3xl font-semibold mb-4">About Bitcoin</h2>
                <div className="mb-8">
                    <h3 className="text-xl font-semibold">What is Bitcoin?</h3>
                    <p>Bitcoin's price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.</p>
                </div>
                <div className="mb-8">
                    <h3 className="text-xl font-semibold">Lorem ipsum dolor sit amet</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed.</p>
                    <p>Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet.</p>
                    <p>Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc.</p>
                    <p>Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at.</p>
                </div>
                <div className="mb-8">
                    <h3 className="text-xl font-semibold my-8">Already Holding Bitcoin?</h3>
                    <div className='flex flex-col md:flex-row md:items-center'>
                        <div className='bg-gradient-to-br from-green-500 to-sky-600 rounded-lg mb-6 md:mr-16 md:mb-0 md:w-[420px] '>
                            <div className='flex m-5'>
                                <div>
                                    <img src='https://img.freepik.com/premium-photo/mobile-app-layout-design-forex-trading-platform-streamlined-professional-layout-m-concepts_655090-797800.jpg' alt="trading" className="w-28 h-32 rounded-lg" />
                                </div>
                                <div className='mx-6'>
                                    <p className='text-white text-2xl'>Calculate your</p>
                                    <p className='text-white text-2xl'>Profits</p>
                                    <p className='bg-white text-2xl p-1 rounded-lg mt-4'>Check Now →</p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-gradient-to-br from-orange-600 to-red-600 rounded-lg md:w-[420px] '>
                            <div className='flex m-5'>
                                <div>
                                    <img src='https://img.freepik.com/premium-photo/mobile-app-layout-design-forex-trading-platform-streamlined-professional-layout-m-concepts_655090-797800.jpg' alt="trading" className="w-28 h-32 rounded-lg" />
                                </div>
                                <div className='mx-6'>
                                    <p className='text-white text-2xl'>Calculate your Tax</p>
                                    <p className='text-white text-2xl'>liability</p>
                                    <p className='bg-white text-2xl p-1 rounded-lg mt-4'>Check Now →</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className='my-8'>Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui</p>
                </div>
            </div>
        </div>
    );
}

export default Technicals;
