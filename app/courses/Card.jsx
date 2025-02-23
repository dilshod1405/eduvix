'use client'
import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid2';
import Link from 'next/link';


const Card = (props) => {
    console.log(props);
    const loading = props.loading
    
  return (
    <div className='md:w-3/4 md:mx-auto md:pt-10 pt-5 block m-auto'>
        {loading ? (
          <Skeleton variant="rectangular" width={210} height={300} className='m-auto'/>

        ) : (
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {props.filteredSpecialities.length > 0 
                ? props.filteredSpecialities.map((item, index) => (
                        <Grid size={6} key={index} className='mt-5 shadow-md rounded-md hover:shadow-xl transition ease-in duration-300 hover:-translate-y-1 hover:scale-105 pb-5'>
                            <div className=''>
                                <img src={item.speciality.picture} alt="" className='block m-auto rounded-t-md md:h-80 w-full size-cover'/>
                                <div className='md:text-lg text-sm font-semibold text-center text-indigo-500 pt-2 md:pt-5 p-2'>{item.speciality.name}</div>
                                <div className='md:text-sm text-xs text-center pt-2 md:pt-3'>Mentor: <span className='font-semibold text-indigo-500'>{item.speciality.teacher.user.first_name} {item.speciality.teacher.user.last_name}</span></div>
                                <Link href={`/course/${item.id}`} className='p-2 bg-indigo-500 text-white rounded-md hover:shadow-lg mt-2 block m-auto text-center md:w-1/2 w-3/4'>Kursni ko'rish</Link>
                            </div>
                        </Grid>
                    ))
                    : <div className='text-xl text-center m-auto text-gray-400'>Belgilangan kategoriya bo'yicha kurslar topilmadi !</div>}
            </Grid>
        )}
    </div>
  )
}

export default Card