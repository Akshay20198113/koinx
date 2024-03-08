import React from 'react';

const Tokenomics = () => {
    return (
        <div className='md:mx-10 w-screen md:w-[980px] my-10 bg-white rounded-lg'>
            <div className="max-w-7xl mx-auto px-4 py-8">
                <h2 className="text-3xl font-semibold mb-4">Tokenomics</h2>
                <div className="flex flex-col md:flex-row items-center">
                    <div className="flex flex-col md:flex-row items-center">
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Initial Distribution</h3>
                            <svg width="200" height="200">
                                <circle cx="100" cy="100" r="80" fill="none" stroke="#5a67d8" strokeWidth="20" />
                                <circle cx="100" cy="100" r="80" fill="none" stroke="#6ee7b7" strokeWidth="20" strokeDasharray="502" strokeDashoffset="125.6" />
                            </svg>
                        </div>
                        <div className='md:ml-10 mt-5 md:mt-0'>
                            <p className="mb-4">
                                <span className='bg-[#6ee7b7] w-5 h-5 rounded-full inline-block align-middle mr-2'></span>
                                Crowdsale investors: 80%
                            </p>
                            <p className="mb-4">
                                <span className='bg-[#5a67d8] w-5 h-5 rounded-full inline-block align-middle mr-2'></span>
                                Foundation: 20%
                            </p>
                        </div>
                    </div>
                    <div>
                        <p className="text-gray-700 mt-4 md:ml-10 md:mt-0">Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis auque. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tokenomics;
