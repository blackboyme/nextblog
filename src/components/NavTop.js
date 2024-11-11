import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileLines } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function NavTop() {
    return (
        <div className='relative group'>
            <div id='navTop' className='flex items-center hover:bg-[#425aef] px-4 py-2 rounded-full transition-colors duration-200 cursor-pointer'>
                <FontAwesomeIcon icon={faFileLines} className='text-white w-6 h-6 mr-3' />
                <div style={{ letterSpacing: '0.3em' }}>文章</div>
            </div>
            <div className='absolute w-full h-2 top-full'></div>
            <div id='childNav' 
                className='absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 bg-white rounded-full transition-all duration-300 ease-out p-2 border-[1.5px] border-[#425aef]
                opacity-0 invisible transform scale-90 translate-y-2 
                group-hover:opacity-100 group-hover:visible group-hover:scale-100 group-hover:translate-y-0'
            >
                <div className='flex flex-row space-x-1'>
                    <div id='navSelect' className='flex hover:bg-[#425aef] px-4 py-2 rounded-full transition-colors duration-200 group/nav cursor-pointer'>
                        <FontAwesomeIcon 
                            icon={faFileLines} 
                            className='text-black w-6 h-6 mr-1 group-hover/nav:text-white transition-colors duration-200' 
                        />
                        <Link 
                            id='text-nav' 
                            href={'/'} 
                            className='text-black whitespace-nowrap group-hover/nav:text-white transition-colors duration-200' 
                        >
                            隧道
                        </Link>
                    </div>

                    <div id='navSelect' className='flex hover:bg-[#425aef] px-4 py-2 rounded-full transition-colors duration-200 group/nav cursor-pointer'>
                        <FontAwesomeIcon 
                            icon={faFileLines} 
                            className='text-black w-6 h-6 mr-1 group-hover/nav:text-white transition-colors duration-200' 
                        />
                        <Link 
                            id='text-nav' 
                            href={'/'} 
                            className='text-black whitespace-nowrap group-hover/nav:text-white transition-colors duration-200' 
                        >
                            分类
                        </Link>
                    </div>
                    <div id='navSelect' className='flex hover:bg-[#425aef] px-4 py-2 rounded-full transition-colors duration-200 group/nav cursor-pointer'>
                        <FontAwesomeIcon 
                            icon={faFileLines} 
                            className='text-black w-6 h-6 mr-1 group-hover/nav:text-white transition-colors duration-200' 
                        />
                        <Link 
                            id='text-nav' 
                            href={'/'} 
                            className='text-black whitespace-nowrap group-hover/nav:text-white transition-colors duration-200' 
                        >
                            分类
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
