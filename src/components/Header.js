'use client'

import React from 'react'
import Logo from './Logo'
import Backhome from './BackHome'
import MenuListTop from './MenuListTop'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrain, faLeaf, faHeart, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
export default function Header() {
    return (
        <div id="top" className="fixed w-full bg-transparent backdrop-blur-sm z-50">
            <nav
                id='nav'
                className='h-16 top-0 w-full duration-300 transition-all text-white'>
                <div className='flex h-full items-center justify-between max-w-[86rem] mx-auto px-6'>
                    <div className='flex flex-nowrap items-center cursor-pointer'>
                        <Logo />
                        <Backhome />
                    </div>
                    <div className='flex items-center'>
                        <FontAwesomeIcon icon={faLeaf} className='text-white w-6 h-6' />
                        <Link href={'/'}>文章</Link>
                        <FontAwesomeIcon icon={faHeart} className='text-white w-6 h-6' />
                        <Link href={'/'}>我的</Link>
                        <FontAwesomeIcon icon={faPaperPlane} className='text-white w-6 h-6' />
                        <Link href={'/'}>关于我</Link>
                    </div>
                    {/* <div>
                        <MenuListTop />
                    </div> */}
                    <div className='flex'>
                        <FontAwesomeIcon icon={faTrain} className='text-white w-6 h-6 cursor-pointer' />
                    </div>
                </div>
            </nav>
        </div>
    )
}
