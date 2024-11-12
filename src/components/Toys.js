import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrain, faDice, faSearch } from '@fortawesome/free-solid-svg-icons'
import ReadingProgress from './ReadingProgress'

export default function Toys() {
    return (
        <>
            <div className='hover:bg-[#425aef] w-9 h-9 rounded-full hidden sm:flex items-center justify-center mr-6'>
                <FontAwesomeIcon icon={faTrain} className='text-black sm:text-white w-5 h-5 cursor-pointer' />
            </div>
            <div className='hover:bg-[#425aef] w-9 h-9 rounded-full hidden sm:flex items-center justify-center mr-6'>
                <FontAwesomeIcon icon={faDice} className='text-white w-5 h-5 cursor-pointer' />
            </div>
            <div className='hover:bg-[#425aef] w-9 h-9 rounded-full hidden sm:flex items-center justify-center mr-6'>
                <FontAwesomeIcon icon={faSearch} className='text-white w-5 h-5 cursor-pointer' />
            </div>
            <ReadingProgress />
        </>
    )
}
