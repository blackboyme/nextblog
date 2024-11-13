import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrain, faDice, faSearch } from '@fortawesome/free-solid-svg-icons'
import ReadingProgress from './ReadingProgress'

export default function Toys() {
    return (
        <>
            <div className='hover:bg-[#425aef] w-9 h-9 rounded-full hidden sm:flex items-center justify-center mr-6'>
                <FontAwesomeIcon id='navIcon' icon={faTrain} className='text-black w-5 h-5 cursor-pointer' />
            </div>
            <div className='hover:bg-[#425aef] w-9 h-9 rounded-full hidden sm:flex items-center justify-center mr-6'>
                <FontAwesomeIcon id='navIcon' icon={faDice} className='text-black w-5 h-5 cursor-pointer' />
            </div>
            <div className='hover:bg-[#425aef] w-9 h-9 rounded-full hidden sm:flex items-center justify-center mr-6'>
                <FontAwesomeIcon id='navIcon' icon={faSearch} className='text-black w-5 h-5 cursor-pointer' />
            </div>
            <ReadingProgress />
        </>
    )
}
