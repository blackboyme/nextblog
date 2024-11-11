import React from 'react'
import Image from 'next/image';
import homeSrc from '/public/bg.jpg'

export default function HomeImage() {
    return (
        <div className="relative w-full h-[100vh]">
            <div id="homepic" className="absolute inset-0">
                <Image  
                    src={homeSrc}
                    fill
                    alt="header background"
                    className="w-full h-full object-cover object-center"
                />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center -mt-14">
                <div className='  text-white text-5xl font-bold'>
                   Gmoonlight1
                </div>
                <div className='  text-white text-3xl mt-3'>
                   曾经有一份真挚的爱情
                </div>
            </div>
        </div>
    )
}
