'use client'

import React from 'react'
import Logo from './Logo'
import Backhome from './BackHome'
import NavTop from './NavTop'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrain } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    return (
        <div id="top" className="fixed w-full bg-transparent z-50">
            <nav
                id='nav'
                className='h-16 top-0 w-full duration-300 transition-all text-white'>
                <div className='flex h-full items-center justify-between max-w-[86rem] mx-auto px-6'>
                    <div className='flex flex-nowrap items-center cursor-pointer'>
                        <Logo />
                        <Backhome />
                    </div>
                    <div className='flex'>
                        <NavTop />
                        <NavTop />
                        <NavTop />
                    </div>
                    <div className='flex'>
                        <FontAwesomeIcon icon={faTrain} className='text-white w-6 h-6 cursor-pointer' />
                    </div>
                </div>
            </nav>
        </div>
    )
}
