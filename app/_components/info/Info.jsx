'use client'
import React from 'react'
import Left from './left/Left'
import Right from './right/Right'



const Info = () => {

  return (
    <div className='md:mt-10 relative md:w-4/5 md:mx-auto pt-5 md:flex md:flex-row block m-auto'>
        <Left />
        <Right />
    </div>
  )
}

export default Info