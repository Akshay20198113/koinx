import React from 'react';

const Add = () => {
    return (
        <div className="mx-10 my-10 bg-blue-600 p-8 rounded-lg text-center">
            <h2 className="text-3xl text-white font-semibold mb-4">Get Started with KoinX</h2>
            <p className="text-3xl text-white mb-4">for FREE</p>
            <p className="mb-8 text-white">With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.</p>
            <img alt='image' src='https://media.licdn.com/dms/image/D4E34AQFNa3iMQ-xrnQ/ugc-proxy-shrink_800/0/1674834378079?e=2147483647&v=beta&t=yZMIF_7_SBmZHFwAwiVXWceXc0Kx87js1tad-vufw40' />
            <button className="bg-white hover:bg-blue-600 font-bold py-2 px-4 rounded">
                Get Started for FREE →
            </button>
        </div>
    );
}

export default Add;
