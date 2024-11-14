import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as solidIcons from '@fortawesome/free-solid-svg-icons'
import NavItem from '@/components/NavItem'

const Nav = (props) => {
    const { icon, name, links } = props
    const far = solidIcons[icon]
    return (
        <div className='relative group'>
            <div className='flex items-center hover:bg-[#425aef] px-4 py-2 rounded-full cursor-pointer'>
                <FontAwesomeIcon 
                    id='navIcon' 
                    icon={far} 
                    className='text-black sm:text-white w-5 h-5 mr-3' 
                />
                <div id='navName' style={{ letterSpacing: '0.3em' }} className='text-black'>
                    {name}
                </div>
            </div>
            <div className='absolute w-full h-2 top-full'></div>
            <div id='childNav'
                className='absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 bg-white rounded-full transition-all duration-300 ease-out p-2 border-[1.5px] border-[#425aef]
                opacity-0 invisible transform scale-90 translate-y-2 
                group-hover:opacity-100 group-hover:visible group-hover:scale-100 group-hover:translate-y-0'
            >
                <div className='flex flex-row space-x-1'>
                    {links.map((linkItem, index) => (
                        <NavItem
                            key={index}
                            icon={linkItem.icon}
                            href={linkItem.href}
                            name={linkItem.name}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Nav