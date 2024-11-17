/* eslint-disable @typescript-eslint/no-unused-expressions */
'use client'

import React from 'react'
import Logo from './Logo'
import Brand from './Brand'
import Nav from './Nav'
import Toys from './Toys'
import MobileBars from './MobileBars'
import throttle from 'lodash.throttle'
import { useCallback, useEffect, useRef } from 'react'

const Header = (props) => {
    const { navTitle } = props
    const lastScrollY = useRef(0)
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
                name: '音乐���'
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
            const scrollY = window.scrollY
            const nav = document.querySelector('#nav')
            const navContainer = document.querySelector('#navContainer')
            const navIcons = document.querySelectorAll('#navIcon')
            const header = document.querySelector('#hero')
            const navNames = document.querySelectorAll('#navName')
            const navTitle = document.querySelector('#navTitle')

            const scrollInHeader = header && (scrollY < 50)
            const isScrollingDown = scrollY > lastScrollY.current && scrollY > 100

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

            if (isScrollingDown) {
                navContainer?.classList.add('-translate-y-full', 'opacity-0')
                navContainer?.classList.remove('translate-y-0', 'opacity-100')
                navTitle?.classList.remove('-translate-y-full', 'opacity-0')
                navTitle?.classList.add('translate-y-0', 'opacity-100')
            } else {
                navContainer?.classList.remove('-translate-y-full', 'opacity-0')
                navContainer?.classList.add('translate-y-0', 'opacity-100')
                navTitle?.classList.add('-translate-y-full', 'opacity-0')
                navTitle?.classList.remove('translate-y-0', 'opacity-100')
            }

            lastScrollY.current = scrollY
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
        <div className="fixed w-full z-50">
            <nav
                id='nav'
                className='h-16 w-full duration-300 transition-all bg-white text-black dark:bg-white'>
                <div className='flex h-full items-center justify-between container mx-auto px-6'>
                    <div className='flex flex-nowrap items-center cursor-pointer'>
                        <Logo />
                        <Brand />
                    </div>
                    <div id='navContainer' className='hidden md:flex transition-all duration-300 transform translate-y-0 opacity-100'>
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
                    <div id='navTitle' 
                        className='absolute left-1/2 -translate-x-1/2 translate-y-100 opacity-0 text-black transition-all duration-300 hidden sm:block'
                    >
                        {navTitle}
                    </div>
                    <div className='flex'>
                        <Toys />
                        <MobileBars />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header