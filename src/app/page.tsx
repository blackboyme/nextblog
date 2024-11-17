"use client"
import React from 'react'
import Hero from '@/components/Hero'
import {Button} from "@nextui-org/react";


export default function Home() {
  return (
    <div>
      <Hero />
      <main id='wrapper' className='w-full  bg-blue-100'>
        <div className='h-96 max-w-[86rem] flex items-center justify-between mx-auto gap-5 p-6'>
          <div className='w-[55vw] h-full bg-blue-500 rounded-lg'>

          </div>
          <div className='w-[45vw] h-full  bg-blue-500 rounded-lg'>

          </div>
        </div>
      </main>
    </div>
  )
}
