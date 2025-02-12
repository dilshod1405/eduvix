'use client'
import React, { useState, useEffect } from 'react'
import Left from './leftSide/Left';
import Right from './rightSide/Right';

const slides= [
  {
    photo: "https://i.pinimg.com/736x/d1/2e/a0/d12ea01888146f29a27e70c777b70b8b.jpg",
    title: "Bilimga tikilgan sarmoya - kelajakka tikilgan sarmoya",
    description: "Biz orqali zamonaviy raqamli kasblarni arzon, sifatli va istalgan muhitta o'rganing."
  },
  {
    photo: "https://i.pinimg.com/736x/90/af/07/90af07854766826d53280ba0da20be4c.jpg",
    title: "Dasturlash",
    description: "Dasturlash sohasi bugungi kunda eng yuqori talab va maoshga ega sohalardan biri hisoblanadi. Nafaqat davlat tashkilotlari balki yangi tashkil qilinayotgan turli start up loyihalar ham bugungi kunda dasturchilarga talabi baland."
  },
  {
    photo: "https://i.ibb.co/YBLYPvtd/605b2678c0e875d568b5e3476854b390.png",
    title: "Arxitektura va Qurilish",
    description: "Mamlakatimizda amalga oshirilayotgan ko'plab qurilishlarning amalga oshirilishi hamda Yangi Toshkent mavzesi kabi yirik loyihalar Arxitektura sohasiga qiziquvchilar sonini oshirmoqda."
  }
]
const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentIndex((currentIndex + 1) % slides.length);
        setFade(false);
      }, 1000);
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex, fade, slides.length]);

  return (
    <div className='md:pt-10 md:pl-20 md:pr-20 md:flex md:flex-row inline-block mx-5'>
      <div className="basis-2/3"><Left title={slides[currentIndex].title} description={slides[currentIndex].description}/></div>
      <div className="basis-1/3"><Right photo={slides[currentIndex].photo}/></div>
    </div>
  )
}

export default Banner