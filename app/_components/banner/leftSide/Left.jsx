import React from 'react'
import Link from 'next/link'

const Left = (props) => {
  return (
    <div className='w-full md:mt-20 md:mb-20 pt-5'>
      <div className='text-xl font-bold md:text-6xl'>{props.title}</div>
      <div className='text-lg md:pt-5 md:w-3/4 md:h-24 pt-1'>{props.description}</div>
      <div className='pt-5'>
        <Link href='/authentication/login' className='link p-2 bg-slate-800 text-white rounded-md md:text-lg hover:shadow-lg'>Bepul boshlash</Link>
      </div>
    </div>
  )
}

export default Left