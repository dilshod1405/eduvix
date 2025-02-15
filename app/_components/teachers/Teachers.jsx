'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const teachers = [
    {
        photo: "https://dilshod1405.pythonanywhere.com//media/media/IMG_4844.jpeg?w=248&fit=crop&auto=format",
        name: "Dilshod Normurodov",
        position: "Full Stack Developer",
        experience: "3"
    },
    {
        photo: "https://dilshod1405.pythonanywhere.com//media/media/IMG_4844.jpeg?w=248&fit=crop&auto=format",
        name: "Dilshod Normurodov",
        position: "Full Stack Developer",
        experience: "3"
    },
    {
        photo: "https://dilshod1405.pythonanywhere.com//media/media/IMG_4844.jpeg?w=248&fit=crop&auto=format",
        name: "Dilshod Normurodov",
        position: "Full Stack Developer",
        experience: "3"
    },
    {
        photo: "https://dilshod1405.pythonanywhere.com//media/media/IMG_4844.jpeg?w=248&fit=crop&auto=format",
        name: "Dilshod Normurodov",
        position: "Full Stack Developer",
        experience: "3"
    },
    {
        photo: "https://dilshod1405.pythonanywhere.com//media/media/IMG_4844.jpeg?w=248&fit=crop&auto=format",
        name: "Dilshod Normurodov",
        position: "Full Stack Developer",
        experience: "3"
    },
    {
        photo: "https://dilshod1405.pythonanywhere.com//media/media/IMG_4844.jpeg?w=248&fit=crop&auto=format",
        name: "Dilshod Normurodov",
        position: "Full Stack Developer",
        experience: "3"
    },
]
const Teachers = () => {
  return (
    <div className='md:pt-20 md:w-3/4 md:mx-auto pt-5 md:block block m-auto h-50'>
        <div className='md:text-4xl text-xl pt-7 md:pt-0 font-bold text-center text-indigo-500'>Tajribali ustozlar jamoasi</div>
        <div className='pt-10 h-50'>
            <Swiper
                modules={[EffectCreative, EffectFade, Autoplay]}
                speed={7000}
                freeMode={true}
                slidesPerView={teachers.length > 5 ? 4 : teachers.length}
                loop={true} // Enables infinite looping
                autoplay={{
                    delay: 0, // Time in milliseconds between slides (adjust as needed)
                    disableOnInteraction: false, // Keeps autoplay running after user interaction
                }}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                onAnimationEnd={() => console.log("animation end")}
                >
                {teachers.map((teacher, index) => (
                    <SwiperSlide key={index} className='md:pb-10 pb-5'>
                        <div className='md:w-64 m-auto shadow-md text-center md:rounded-2xl md:text-left pb-3'>
                            <img src={teacher.photo} alt="photo" className='w-full md:rounded-t-xl'/>
                            <div className='md:text-xl text-xs font-semibold md:pl-4 text-indigo-500 pt-2'>{teacher.name}</div>
                            <div className='md:text-sm text-xs font-semibold md:pl-4'>{teacher.position}</div>
                            <div className='pr-4 pt-2'>
                                <div className='text-sm font-extralight pl-4'>Tajriba: &#160;&#160;&#160;+{teacher.experience} yil</div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </div>
  )
}

export default Teachers