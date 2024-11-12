import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

export default function Brand() {
    return (
        <>
            <Link href="/" passHref legacyBehavior>
                <div className='relative group w-50 hover:bg-blue-500 transition-colors duration-200 rounded-full px-2 py-1'>
                    <div id='gmoon' className='text-xl group-hover:opacity-0'>
                        Gmoonlight1
                    </div>
                    <div id='house' className='hidden group-hover:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <FontAwesomeIcon icon={faHouse} className='text-white w-5 h-5' />
                    </div>
                </div>
            </Link>
        </>
    )
}
