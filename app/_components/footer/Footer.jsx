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

const data_2 = [
  {
    name: "Huquqiy hujjatlar",
    url: "/",
    icon: <TaskIcon />
  },
  {
    name: "Instagram",
    url: "/courses",
    icon: <InstagramIcon />
  },
  {
    name: "Telegram",
    url: "/exams",
    icon: <TelegramIcon />
  },
  {
    name: "LinkedIn",
    url: "/events",
    icon: <LinkedInIcon />
  }
]

const Footer = () => {
  return (
    <div className='bg-indigo-500 text-white md:rounded-t-full md:pt-5 pt-5 md:pb-5 md:mt-10 mt-5 bottom-0'>
      <div className='md:flex md:flex-row md:w-3/4 mx-auto block m-auto w-3/4'>
        <ul className='block md:w-1/7 m-auto'>
          {data_1.map((item, index) => (
            <li key={index} className='md:text-lg p-2 '>
              <Link href={item.url} className='font-semibold md:text-lg '>{item.icon} {item.name}</Link>
            </li>
          ))}
        </ul>
        <ul className='block md:w-1/7 m-auto'>
          {data_2.map((item, index) => (
            <li key={index} className='md:text-lg p-2'>
              <Link href={item.url} className='font-semibold md:text-lg'>{item.icon} {item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Footer