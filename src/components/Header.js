'use client'

import React from 'react'
import Logo from './Logo'
import Brand from './Brand'
import Nav from './Nav'
import Toys from './Toys'
import MobileBars from './MobileBars'


const Header = () => {

    return (
        <>
            <div className="fixed w-full bg-white sm:bg-transparent z-50">
                <nav
                    id='nav'
                    className='h-16 top-0 w-full duration-300 transition-all text-black sm:text-white'>
                    <div className='flex h-full items-center justify-between max-w-[86rem] mx-auto px-6'>
                        <div className='flex flex-nowrap items-center cursor-pointer'>
                            <Logo />
                            <Brand />
                        </div>
                        <div className='hidden md:flex'>
                            <Nav />
                            <Nav />
                            <Nav />
                        </div>
                        <div className='flex w-56'>
                            <Toys />
                            <MobileBars />
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Header