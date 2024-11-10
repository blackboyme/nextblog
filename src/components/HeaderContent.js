import React from 'react'
import Image from 'next/image';
import homeSrc from '/public/bg.jpg'

export default function HeaderContent() {
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
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div id="homeText1" className='  text-white text-3xl mt-10'>
                   曾经有一份真挚的爱情
                </div>
                <div id="homeText2" className=' text-white text-3xl mt-10'>
                   曾经有一份真挚的爱情
                </div>
            </div>
        </div>
    )
}
