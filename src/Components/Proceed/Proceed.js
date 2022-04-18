import React, { useState, useEffect } from 'react';


import img1 from '../image/forest1.jpg';
import img2 from '../image/forest2.jpg';
import img3 from '../image/sealife1.jpg';



const Proceed = () => {



    return (
        <div>
            <section className="overflow-hidden text-gray-700 ">
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
            <p className="text-justify p-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate explicabo, enim quam sapiente laboriosam repellat facere voluptates totam deleniti, quos illum ad dolore saepe consectetur, minus magni beatae maiores. Quo architecto consequatur sed! Nisi placeat voluptas pariatur mollitia veritatis dolorem odio? Quaerat praesentium ipsum veritatis? Ea, soluta ad maiores tempora cum sapiente minima consequatur possimus eligendi ipsum rem assumenda culpa iure! Quaerat praesentium, iusto voluptatem tempora sapiente reiciendis ab aliquid amet, odio tenetur iure laboriosam, enim facilis eius! Provident iure natus officiis, iusto veniam suscipit quae rem recusandae perspiciatis alias, expedita amet? Error expedita, dignissimos officia blanditiis dolor, aspernatur, animi mollitia quia eum quisquam nobis similique. Ut, omnis itaque blanditiis labore harum exercitationem vitae a ad nihil molestias nemo quaerat laboriosam odit at quis modi obcaecati vero! Eius reiciendis ullam eos atque asperiores, aperiam veniam maiores sit explicabo dolorem libero voluptatibus possimus fugit eveniet quos commodi quod eligendi! Eum culpa necessitatibus a reprehenderit repellendus nihil quia et, officiis veritatis molestiae saepe ipsum in adipisci autem ab sed quam at minima voluptatem? Ullam voluptatem omnis in, id quibusdam error enim eaque tempora quas tenetur sit eveniet eius perferendis cupiditate explicabo exercitationem pariatur. Consectetur reiciendis quaerat quas. In voluptate libero aliquam inventore!</p>
        </div>

    );
};

export default Proceed;