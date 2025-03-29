import React from 'react'
import '@/app/_styles/header.scss'
import Navigation from './links/Navigation'
import { Logo } from './logo/Logo'
import Sign from './sign/Sign'

const Header = () => {

  return (
    <div className='pt-1 md:pt-5 md:pb-5 md:pl-20 md:pr-20 md:mx-auto shadow-lg sticky top-0 z-50 bg-white md:h-20 h-1/6'>
      <section className='flex md:flex-row flex-col space-x-4 pt-1 justify-between md:w-4/5 mx-auto items-center'>
        <Logo />
        <Navigation />
        <Sign />
      </section>
    </div>
  )
}

export default Header