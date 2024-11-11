'use client'

import React from 'react'
import Logo from './Logo'
import Backhome from './BackHome'
import NavTop from './NavTop'
import Train from './Train'
import PhoneBars from './PhoneBars'


export default function Header() {
    return (
        <div id="top" className="fixed w-full bg-white sm:bg-transparent z-50">
            <nav
                id='nav'
                className='h-16 top-0 w-full duration-300 transition-all text-black sm:text-white'>
                <div className='flex h-full items-center justify-between max-w-[86rem] mx-auto px-6'>
                    <div className='flex flex-nowrap items-center cursor-pointer'>
                        <Logo />
                        <Backhome />
                    </div>
                    <div className='hidden md:flex'>
                        <NavTop />
                        <NavTop />
                        <NavTop />
                    </div>
                    <div className='flex'>
                        <Train />
                        <PhoneBars />
                    </div>
                </div>
            </nav>
        </div>
    )
}
