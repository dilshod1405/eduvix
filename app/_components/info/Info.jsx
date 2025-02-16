'use client'
import React from 'react'
import Left from './left/Left'
import Right from './right/Right'



const Info = () => {

  return (
    <div className='md:mt-10 relative md:w-3/4 md:mx-auto pt-5 md:pl-20 md:pr-20 md:flex md:flex-row block m-auto text-center h-50'>
        <Left />
        <Right />
    </div>
  )
}

export default Info