import React from 'react';
import Image from "./Image"
import Offers from "./Offers";

function LandingPageBody(){
    return (
        <section className='relative flex flex-col w-full top-20 bottom-16'>
            <section className='flex flex-wrap items-center w-full pb-10 lg:pb-0 gap-y-10 lg:gap-y-0'>
                <Image source="./images/car_image_eight.jpg" alt="an image containing a car" className="w-screen h-auto lg:w-[31rem] xl:w-[45rem]"/>
                <div className='flex flex-col items-center w-[27.5rem] text-neutral-700 md:w-[35rem] lg:w-[30rem] m-auto'>
                    <h1 className='my-1 text-5xl uppercase md:text-7xl lg:text-6xl font-extralight'>Elegance and Style, just for <b className='text-yellow-300'>you.</b></h1>
                    <p className='p-2 text-md md:text-2xl lg:text-lg xl:text-lg font-extralight'>Arrive at your destination, occassion, meeting in class and style with us.</p>
                    <button className='mr-auto ml-2 px-4 py-3 uppercase text-neutral-600 bg-yellow-300 hover:bg-yellow-200 disabled:bg-yellow-100' disabled>Make a booking</button>
                </div>
            </section>
            <section className='flex flex-wrap items-center my-auto h-auto lg:h-[30rem] justify-evenly bg-neutral-800 gap-y-12 py-2 lg:py-0'>
                <Offers/>                
            </section>
        </section>
    )
}

export default LandingPageBody;