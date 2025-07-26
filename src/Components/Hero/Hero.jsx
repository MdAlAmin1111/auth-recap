import React from 'react';
import { ImOffice } from 'react-icons/im';
import heroImg from '../../assets/hero-laptop-4.png'

const Hero = () => {
    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl">Used Laptop
                        <span className="text-[#8b0836]"> New</span> Performance
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">Get top-brand used laptops, expertly refurbished and performance-tested — all
                        <br className="hidden md:inline lg:hidden" />at unbeatable prices. Experience the power of new, without the price tag.
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-blue-500 text-gray-50">Shop now</a>
                    </div>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src={heroImg} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
            </div>
        </section>
    );
};

export default Hero;