import React from 'react'
import '@/app/_styles/header.scss'
import Navigation from './links/Navigation'
import { Logo } from './logo/Logo'

const Header = () => {

  return (
    <div className='header bg-slate-800 text-white md:pl-10 md:pr-10 pt-2 pb-3 rounded-b-3xl'>
      <ul className='md:flex md:flex-row md:items-center flex flex-col md:justify-between text-center '>
        <li className='inline-block text-sm'><Logo /></li>
        <li className='inline-block text-sm m-auto md:m-0'><Navigation/></li>
      </ul>
    </div>
  )
}

export default Header