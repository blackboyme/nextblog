'use client'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripVertical} from '@fortawesome/free-solid-svg-icons'

export default function Logo() {
    return (
        <>
            <FontAwesomeIcon icon={faGripVertical} className='text-white mr-4 w-6 h-6' />
        </>
    )
}


