'use client'
import React from 'react'
import Left from './left/Left'
import Right from './right/Right'



const Info = () => {

  return (
    <div className='md:pt-10 pt-5 md:pl-20 md:pr-20 md:flex md:flex-row block md:mx-5 m-auto text-center h-50'>
        <Left />
        <Right />
    </div>
  )
}

export default Info