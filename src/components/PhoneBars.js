import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faDice } from '@fortawesome/free-solid-svg-icons'

export default function PhoneBars() {
    return (
        <>
            <FontAwesomeIcon icon={faDice} className='text-black w-6 h-6 cursor-pointer sm:hidden mr-2' />
            <FontAwesomeIcon icon={faBars} className='text-black w-6 h-6 cursor-pointer sm:hidden' />

        </>
    )
}
