import React from 'react'
import Link from 'next/link'

const Left = (props) => {
  return (
    <div className='w-full mt-20'>
      <div className='text-xl font-bold md:text-6xl'>{props.title}</div>
      <div className='text-lg pt-5 md:w-3/4'>{props.description}</div>
      <div className='pt-5'>
        <Link href='/authentication/login' className='link p-2 bg-indigo-500 text-white rounded-md md:text-lg'>Bepul boshlash</Link>
      </div>
    </div>
  )
}

export default Left