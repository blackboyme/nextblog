import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faBilibili, faGithub, faWeibo } from '@fortawesome/free-brands-svg-icons'
export default function Social() {
  return (
    <div className='flex gap-4 justify-center items-center bg-blue-100'>
      <div className='bg-gray-800 w-9 h-9 rounded-full flex items-center justify-center mr-6'>
        <FontAwesomeIcon icon={faEnvelope} className='text-white w-5 h-5 cursor-pointer' />
      </div>
      <div className='bg-gray-800 w-9 h-9 rounded-full flex items-center justify-center mr-6'>
        <FontAwesomeIcon icon={faWeibo} className='text-white w-5 h-5 cursor-pointer' />
      </div>
      <img src='/okgirl.png' alt='184064199' className='w-14 h-14'></img>
      <div className='bg-gray-800 w-9 h-9 rounded-full flex items-center justify-center mr-6'>
        <FontAwesomeIcon icon={faBilibili} className='text-white w-5 h-5 cursor-pointer' />
      </div>
      <div className='bg-gray-800 w-9 h-9 rounded-full flex items-center justify-center mr-6'>
        <FontAwesomeIcon icon={faGithub} className='text-white w-5 h-5 cursor-pointer' />
      </div>
    </div>
  )
}
