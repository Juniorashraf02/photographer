import React, { useState, useEffect } from 'react';


import img1 from '../image/forest1.jpg';
import img2 from '../image/forest2.jpg';
import img3 from '../image/sealife1.jpg';



const Proceed = () => {



    return (
        <div>
            <section className="overflow-hidden text-gray-700 container mt-10 ">
                <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
                    <div className="flex flex-wrap -m-1 md:-m-2">
                        <div className="flex flex-wrap w-1/3">
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/3">
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/3">
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/3">
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src={img1} />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/3">
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src={img2} />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/3">
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src={img3} />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <p className="text-justify p-10 text-gray-400">
                Every image is premium quality and lots of time was spen for each photo. Sometime hours spent for a single click. So for this reason, each photo is charged high. And if you want a high resolution picture then it'll charge more!!! But I'm thanking for selecting my picture! It helps me a lot.
            </p>

            <div className="md:flex justify-center gap-5">
                <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold mt-3 py-2 px-4 rounded"> Buy 5 Images </button> <br />
                <button class="bg-orange-600 hover:bg-orange-700 text-white font-bold mt-3 py-2 px-4 rounded"> Check offer </button> <br />
                <button class="bg-green-600 hover:bg-green-700 text-white font-bold mt-3 py-2 px-4 rounded"> Buy me a coffee! </button>
            </div>
        </div>

    );
};

export default Proceed;