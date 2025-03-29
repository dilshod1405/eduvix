import React from 'react'
import Header from '../_components/header/Header'
import Footer from '../_components/footer/Footer'
import Link from 'next/link'
import DownloadIcon from '@mui/icons-material/Download';


const data = [
    {
        header: "Arxitektura va qurilish dasturlari",
        list: [
            {
                title: "Autodesk AutoCAD 2019",
                link: "/programs/autocad-2019",
            },
            {
                title: "Autodesk AutoCAD 2020",
                link: "/programs/autocad-2019",
            },
            {
                title: "Autodesk AutoCAD 2021",
                link: "/programs/autocad-2019",
            },
            {
                title: "Autodesk AutoCAD 2022",
                link: "/programs/autocad-2019",
            },
            {
                title: "Autodesk AutoCAD 2023",
                link: "/programs/autocad-2019",
            },
            {
                title: "Autodesk AutoCAD 2024",
                link: "/programs/autocad-2019",
            },
            
        ]
    },
    {
        header: "Dizayn dasturlari",
        list: [
            {
                title: "Autodesk 3D Max 2019",
                link: "/programs/autocad-2019",
            },
            {
                title: "Autodesk 3D Max 2020",
                link: "/programs/autocad-2019",
            },
            {
                title: "Autodesk 3D Max 2021",
                link: "/programs/autocad-2019",
            },
            {
                title: "Autodesk 3D Max 2022",
                link: "/programs/autocad-2019",
            },
            {
                title: "Autodesk 3D Max 2023",
                link: "/programs/autocad-2019",
            },
        ]
    },
]
const page = () => {
  return (
    <div className='min-h-screen'>
        <Header />
        <section className='md:w-4/5 md:mx-auto md:pt-10 md:pb-10 block m-auto'>
           {data.map((item, index) => (
               <div key={index} className='md:pt-10'>
                   <div className='md:text-4xl text-xl md:pt-7 font-semibold text-center'>{item.header}</div>
                   <div className='grid grid-cols-2 md:grid-cols-3 gap-5 pt-10 text-center w-3/4 m-auto md:pt-10'>
                       {item.list.map((item, index) => (
                           <Link href={item.link} key={index} className='md:text-xl text-sm font-semibold block w-3/4 m-auto'>
                               <div><DownloadIcon className='text-sky-600'/> {item.title}</div>
                           </Link>
                       ))}
                   </div>
               </div>
           ))}
        </section>
        <Footer />
    </div>
  )
}

export default page