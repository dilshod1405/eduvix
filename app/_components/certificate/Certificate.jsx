import Link from 'next/link'
import FactCheckIcon from '@mui/icons-material/FactCheck';
import React from 'react'

const Certificate = () => {
 
  return (
    <div className='md:pt-20 md:w-3/4 md:mx-auto pt-5 md:pl-20 md:pr-20 md:flex md:flex-row block m-auto h-50'>
        <div className='md:flex md:w-1/2 w-3/4 m-auto pt-5 '>
            <img src="https://i.ibb.co/C3FWjC4k/d.png" alt="photo" className='w-full md:rounded-2xl '/>
        </div>
        <div className='md:w-1/2 w-6/7 m-auto p-5 h-50'>
            <div className='md:text-4xl text-xl md:pt-7 font-bold text-center text-indigo-500'>Sertifikat</div>
            <div className='md:pt-10 md:text-lg text-sm text-justify'>Har bir mutaxassislik kursida kursni to'liq yakunlagan talabalarga sertifikat beriladi. Faqat ayrim mutaxassisliklarda sertifikat olish uchun alohida <Link href='/exams' className=' text-indigo-500 md:text-lg font-semibold'>imtihon</Link> topshiriladi.</div>
            <Link href='/certificates' className='p-2 bg-indigo-500 text-white rounded-md md:text-lg hover:shadow-lg md:mt-10 mt-5 block m-auto text-center md:w-1/2 w-3/4'><FactCheckIcon /> Sertifikatni tekshirish</Link>
        </div>
    </div>
  )
}

export default Certificate