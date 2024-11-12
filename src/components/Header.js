'use client'

import React from 'react'
import Logo from './Logo'
import Brand from './Brand'
import Nav from './Nav'
import Toys from './Toys'
import MobileBars from './MobileBars'


const Header = () => {
    const navs = [
        {
            icon: 'faFileLines',
            href: '/',
            name: '文章',
            links: [{
                icon: 'faCube',
                href: '/',
                name: '隧道'
            },
            {
                icon: 'faShapes',
                href: '/',
                name: '分类'
            },
            {
                icon: 'faTags',
                href: '/',
                name: '标签'
            }]
        },
        {
            icon: 'faHeart',
            href: '/',
            name: '我的',
            links: [{
                icon: 'faMusic',
                href: '/',
                name: '音乐馆'
            },
            {
                icon: 'faGamepad',
                href: '/',
                name: '追番页'
            },
            {
                icon: 'faImages',
                href: '/',
                name: '相册集'
            }]
        }, {
            icon: 'faPaperPlane',
            href: '/',
            name: '关于',
            links: [{
                icon: 'faPaperPlane',
                href: '/',
                name: '关于'
            },
            {
                icon: 'faShoePrints',
                href: '/',
                name: '随便逛逛'
            }]
        }
    ]

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
                            {navs.map((linkItem, index) => (
                                <Nav
                                    key={index}
                                    icon={linkItem.icon}
                                    href={linkItem.href}
                                    name={linkItem.name}
                                    links={linkItem.links}
                                />
                            ))}
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