import React from 'react'
import Link from 'next/link'

const data = [
    {
        logo: "https://damassets.autodesk.net/content/dam/autodesk/www/product-imagery/badge-75x75/simplified-badges/autocad-2023-simplified-badge-75x75.png",
        title: "AutoCAD 2022",
        url: ""
    },
    {
        logo: "https://damassets.autodesk.net/content/dam/autodesk/www/product-imagery/badge-75x75/simplified-badges/3ds-max-2023-simplified-badge-75x75.png",
        title: "3ds Max 2022",
        url: ""
    },
    {
        logo: "https://damassets.autodesk.net/content/dam/autodesk/www/product-imagery/badge-75x75/simplified-badges/revit-2023-simplified-badge-75x75.png",
        title: "Revit 2022",
        url: ""
    }
]

const Programs = () => {
  return (
    <div className='md:pt-20 md:w-3/4 md:mx-auto pt-5 md:pl-20 md:pr-20 block m-auto h-50'>
        <div className='md:text-4xl text-xl md:pt-7 font-bold text-center text-indigo-500'>Kerakli dasturlarni yuklash</div>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-5 pt-10 text-center w-3/4 m-auto md:pt-20'>
            {data.map((item, index) => (
                <Link href={item.url} key={index} className='md:text-xl text-sm font-semibold block w-1/2 m-auto'>
                    <img src={item.logo} alt={item.title} className='m-auto pb-2 block ' />
                    <div>{item.title}</div>
                </Link>
            ))}
        </div>
        <Link href='/authentication/login' className='p-2 bg-indigo-500 text-white rounded-md md:text-lg hover:shadow-lg md:mt-10 mt-5 block m-auto text-center md:w-1/5 w-3/4'>Barchasini ko'rish</Link>
    </div>
  )
}

export default Programs