import Link from 'next/link'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TaskIcon from '@mui/icons-material/Task';
import QuizIcon from '@mui/icons-material/Quiz';
import DuoIcon from '@mui/icons-material/Duo';
import { Logo } from '../header/logo/Logo';

const data_1 = [
  {
    name: "Bosh sahifa",
    url: "/",
    icon: <HomeIcon />
  },
  {
    name: "Kurslar",
    url: "/courses",
    icon: <PlayCircleIcon />
  },
  {
    name: "Imtihonlar",
    url: "/exams",
    icon: <QuizIcon />
  },
  {
    name: "Dayjestlar",
    url: "/events",
    icon: <DuoIcon />
  }
]

const Footer = () => {
  return (
    <div className='bg-white md:pt-5 pt-5 md:pb-5 md:mt-10 mt-5 border-t-2 border-slate-200 pb-5'>
      <section className='flex md:flex-row flex-col md:space-x-4 space-y-3 justify-between md:w-4/5 mx-auto items-center'>
        <Logo />
        <Link href='/' className='md:text-2xl text-lg font-bold text-slate-600'><InstagramIcon /> Instagram</Link>
        <Link href='/' className='md:text-2xl text-lg font-bold text-slate-600'><TelegramIcon /> Telegram</Link>
        <Link href='/' className='md:text-2xl text-lg font-bold text-slate-600'><LinkedInIcon /> LinkedIn</Link>
        <Link href='/' className='md:text-2xl text-lg font-bold text-slate-600 md:mb-2 mb-2'>© 2025,  <span className='text-indigo-500'>EduVix</span> </Link>
      </section>
    </div>
  )
}

export default Footer