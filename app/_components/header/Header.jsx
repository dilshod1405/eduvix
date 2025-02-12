import React from 'react'
import '@/app/_styles/header.scss'
import Navigation from './links/Navigation'
import { Logo } from './logo/Logo'

const Header = () => {

  return (
    <div className='header md:pl-10 md:pr-10 pt-2 pb-3'>
      <ul className='md:flex md:justify-between text-center'>
        <li className='inline-block text-sm'><Logo /></li>
        <li className='inline-block text-sm'><Navigation/></li>
      </ul>
    </div>
  )
}

export default Header