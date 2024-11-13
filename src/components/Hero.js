'use client'
import React from 'react'
import Image from 'next/image';
import homeSrc from '/public/bg.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'


const Hero = () => {
    let wrapperTop = 0

    let GREETING_WORDS = ['曾经有一份真诚的爱情摆在我面前',
        '可是我没有去珍惜',
        '等到失去的时候才后悔莫及',
        '尘世间最痛苦的事莫过于此',
        '如果上天能够给我一个再来一次的机会',
        '我会对那个女孩说三个字',
        '我爱你',
        '如果非要在这份爱上加一个期限',
        '我希望是一万年……']

    const [typed, changeType] = useState()
    useEffect(() => {
        updateHeaderHeight()
        if (!typed && window && document.getElementById('typed')) {
            loadExternalResource('/js/typed.min.js', 'js').then(() => {
                if (window.Typed) {
                    changeType(
                        new window.Typed('#typed', {
                            strings: GREETING_WORDS,
                            typeSpeed: 150,
                            backSpeed: 50,
                            backDelay: 400,
                            showCursor: true,
                            loop: true,
                            smartBackspace: true
                        })
                    )
                }
            })
        }

        window.addEventListener('resize', updateHeaderHeight)
        return () => {
            window.removeEventListener('resize', updateHeaderHeight)
        }
    }, [])

    function updateHeaderHeight() {
        requestAnimationFrame(() => {
            const wrapperElement = document.getElementById('wrapper')
            wrapperTop = wrapperElement?.offsetTop
            console.log('wrapperTop:', wrapperTop)
        })
    }


    function loadExternalResource(url, type = 'js') {
        // 检查是否已存在
        const elements =
            type === 'js'
                ? document.querySelectorAll(`[src='${url}']`)
                : document.querySelectorAll(`[href='${url}']`)

        return new Promise((resolve, reject) => {
            if (elements.length > 0 || !url) {
                resolve(url)
                return url
            }

            let tag

            if (type === 'css') {
                tag = document.createElement('link')
                tag.rel = 'stylesheet'
                tag.href = url
            } else if (type === 'font') {
                tag = document.createElement('link')
                tag.rel = 'preload'
                tag.as = 'font'
                tag.href = url
            } else if (type === 'js') {
                tag = document.createElement('script')
                tag.src = url
            }
            if (tag) {
                tag.onload = () => {
                    console.log('Load Success', url)
                    resolve(url)
                }
                tag.onerror = () => {
                    console.log('Load Error', url)
                    reject(url)
                }
                document.head.appendChild(tag)
            }
        })
    }
    return (
        <div id='hero' className="relative w-full h-[100vh]">
            <div id="homepic" className="absolute inset-0">
                <Image
                    src={homeSrc}
                    fill
                    alt="header background"
                    className="w-full h-full object-cover object-center"
                />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center -mt-14">
                <div className='  text-white text-5xl'>
                    Gmoonlight1
                </div>
                <div className='  text-white text-3xl mt-3 h-12'>
                    <span id='typed' />
                </div>
            </div>
            <div
                onClick={() => {
                    const viewportHeight = window.innerHeight-64;
                    window.scrollTo({
                        top: viewportHeight,
                        behavior: 'smooth'
                    })
                }}
                className='glassmorphism cursor-pointer w-40 text-center pt-4 pb-3 text-md text-white duration-300 rounded-3xl
                    absolute left-1/2 -translate-x-1/2 bottom-3'
            >
                <FontAwesomeIcon 
                    icon={faAngleDown} 
                    className='w-6 h-6 animate-fade-down'
                />
            </div>
        </div>
    )
}

export default Hero