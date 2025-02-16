'use client'
import React, { useState, useEffect } from 'react'
import Left from './leftSide/Left';
import Right from './rightSide/Right';

const slides= [
  {
    photo: "https://i.pinimg.com/736x/d1/2e/a0/d12ea01888146f29a27e70c777b70b8b.jpg",
    title: "Bilimga tikilgan sarmoya - kelajakka tikilgan sarmoya",
    description: "Bizdagi bilim va tajriba orqali zamonaviy, raqamli kasblarni barchasini bir platformada arzon, sifatli va qulay muhitta o'rganing."
  },
  {
    photo: "https://i.pinimg.com/736x/90/af/07/90af07854766826d53280ba0da20be4c.jpg",
    title: "Dasturlash",
    description: "Dasturlash sohasi bugungi kunda eng yuqori talab va maoshga ega sohalardan biri hisoblanadi."
  },
  {
    photo: "arch.png",
    title: "Arxitektura va Qurilish",
    description: "Mamlakatimizda ko'plab qurilishlarning amalga oshirilishi hamda Yangi Toshkent mavzesi kabi yirik loyihalar Arxitektura sohasida yangi ish o'rinlarini tashkil qilishga zamin yaratmoqda."
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
    <div className=' md:w-4/5 md:mx-auto pt-0 md:pl-20 md:pr-20 md:flex md:flex-row inline-block mx-5 h-78'>
      <div className="basis-2/3"><Left title={slides[currentIndex].title} description={slides[currentIndex].description}/></div>
      <div className="basis-1/3"><Right photo={slides[currentIndex].photo}/></div>
    </div>
  )
}

export default Banner