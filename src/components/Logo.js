'use client'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripVertical } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import Image from 'next/image';

export default function Logo() {
    return (
        <>
            <div className='relative group'>
                <div className='flex'>
                    <FontAwesomeIcon icon={faGripVertical} className='text-white p-2 mr-4 w-5 h-5 group-hover:bg-[#425aef] rounded-xl' />
                </div>
                <div className='absolute w-full h-4  left-0 top-full'></div>
                <div id='navbar' className='absolute group/title text-gray-500 top-full mt-4 rounded-xl w-96 h-[100px] bg-white hover:border-[#425aef] border-[1px] border-transparent
                transition-all duration-300 ease-out
                opacity-0 invisible transform scale-90 translate-y-2 
                group-hover:opacity-100 group-hover:visible group-hover:scale-100 group-hover:translate-y-0
                '>
                    <div className='p-2'>
                        <div className='text-sm pl-1 group-hover/title:text-[#425aef]'>推荐</div>
                        <div className='flex justify-between'>
                            <div id='today' className='flex group/today text-center rounded-xl mt-3 w-1/2 py-2 hover:bg-[#425aef]'>
                                <Image
                                    src="/watermaler.ico"
                                    alt="watermaler"
                                    width={24}  // w-6 等于 24px
                                    height={24} // h-6 等于 24px
                                    className='ml-2 mr-4 group-hover/today:bg-white group-hover/today:rounded-full'
                                />
                                <Link href='/' alt='今日毕' className='group-hover/today:text-white'>今日毕</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


