import Link from 'next/link'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Logo } from '../header/logo/Logo';


const Footer = () => {
  return (
    <div className='bg-white md:pt-5 pt-5 md:pb-5 md:mt-10 mt-5 border-t-2 border-slate-200 pb-5'>
      <section className='flex md:flex-row flex-col md:space-x-4 space-y-3 md:space-y-0 justify-between md:w-4/5 mx-auto text-center items-center '>
        <Logo />
        <Link href='/' className='md:text-xl text-lg font-bold text-slate-600'><InstagramIcon /> Instagram</Link>
        <Link href='https://t.me/Edu_Vix' className='md:text-xl text-lg font-bold text-slate-600'><TelegramIcon /> Telegram</Link>
        <Link href='/' className='md:text-xl text-lg font-bold text-slate-600'><YouTubeIcon /> YouTube</Link>
        <Link href='/' className='md:text-xl text-lg font-bold text-slate-600'><LinkedInIcon /> LinkedIn</Link>
        <Link href='/' className='md:text-xl text-lg font-bold text-slate-600 md:mb-2 mb-2'>© 2025,  <span className='text-indigo-500'>EduVix</span> </Link>
      </section>
    </div>
  )
}

export default Footer