import React from 'react'
import { MenuItemDrop } from './MenuItemDrop'

export default function MenuListTop() {

    let links = [
        {
            id: 1,
            icon: 'fas fa-search',
            name: 'search',
            href: '/search',
            show: true
        },
        {
            id: 2,
            icon: 'fas fa-search',
            name: 'search',
            href: '/search',
            show: true
        },
        {
            id: 3,
            icon: 'fas fa-archive',
            name: 'achive',
            href: '/archive',
            show: true
        }
    ]

    return (
        <>
            <nav
                id='nav-mobile'
                className='leading-8 justify-center font-light w-full flex'>
                {links?.map(
                    (link, index) =>
                        link && link.show && <MenuItemDrop key={index} link={link} />
                )}
            </nav>
        </>
    )
}
