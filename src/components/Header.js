'use client'

import React from 'react'
import Logo from './Logo'
import Brand from './Brand'
import Nav from './Nav'
import Toys from './Toys'
import MobileBars from './MobileBars'
import throttle from 'lodash.throttle'
import { useCallback, useEffect } from 'react'

let windowTop = 0

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

    const throttleMs = 200
    const topNavStyleHandler = useCallback(
        throttle(() => {
            const scrollS = window.scrollY
            const nav = document.querySelector('#nav')
            const navIcons = document.querySelectorAll('#navIcon')
            const header = document.querySelector('#hero')
            const navNames = document.querySelectorAll('#navName')

            const scrollInHeader = header && (scrollS < 50)

            console.log('scrollInHeader', scrollInHeader)
            console.log('nav', nav)
            console.log('scrollS', scrollS)
            console.log('header?.clientHeight - 50:', header?.clientHeight)
            if (scrollInHeader) {
                nav && nav.classList.replace('bg-white', 'sm:bg-transparent')
                nav && nav.classList.replace('text-black', 'sm:text-white')
                navIcons.forEach(icon => {
                    icon.classList.replace('text-black', 'sm:text-white')
                })
                navNames.forEach(name => {
                    name.classList.replace('text-black', 'sm:text-white')
                })
            } else {
                nav && nav.classList.replace('sm:bg-transparent', 'bg-white')
                nav && nav.classList.replace('sm:text-white', 'text-black')
                navIcons.forEach(icon => {
                    icon.classList.replace('sm:text-white', 'text-black')
                })
                navNames.forEach(name => {
                    name.classList.replace('sm:text-white', 'text-black')
                })
            }

        }, throttleMs)
        , [])

    useEffect(() => {
        window.addEventListener('scroll', topNavStyleHandler)
        topNavStyleHandler()
        return () => {
            window.removeEventListener('scroll', topNavStyleHandler)
        }
    }, [topNavStyleHandler])

    return (
        <div className="fixed w-full  z-50">
            <nav
                id='nav'
                className='h-16 top-0 w-full duration-300 transition-all bg-white text-black'>
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
    )
}

export default Header