import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as solidIcons from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const NavItem = (props) => {
    const { icon, href, name } = props
    const far = solidIcons[icon]
    return (
        <div className='flex items-center hover:bg-[#425aef] px-4 py-2 rounded-full transition-colors duration-200 group/nav cursor-pointer'>
            <div className='flex items-center'>
                <FontAwesomeIcon
                    icon={far}
                    className='text-black w-4 h-4 mr-1 group-hover/nav:text-white transition-colors duration-200'
                />
                <Link
                    href={href}
                    className='text-black whitespace-nowrap group-hover/nav:text-white transition-colors duration-200'
                >
                    {name}
                </Link>
            </div>
        </div>
    )
}

export default NavItem