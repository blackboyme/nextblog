import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function PhoneBars() {
    return (
        <>
          <FontAwesomeIcon icon={faBars} className='text-black w-6 h-6 cursor-pointer sm:hidden' />
        </>
    )
}
