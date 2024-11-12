import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function MobileBars() {
  return (
    <>
      <div className='ml-1 w-9 h-9 flex items-center justify-center  cursor-pointer sm:hidden'>
        <FontAwesomeIcon icon={faBars} className='text-black w-6 h-6' />
      </div>
    </>
  )
}
