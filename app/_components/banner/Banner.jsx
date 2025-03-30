"use client"
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const banners = [
  {
    title: "Qurilish va injeneriya",
    img: "https://t4.ftcdn.net/jpg/02/27/63/29/360_F_227632912_rYumiY9wlbxbmP3kkaDNZjjXxhRULco3.jpg",
    description: "Konstruktiv, Elektr, Ventilyatsiya va Kanalizatsiya tizimlarini loyihalash"
  },
  {
    title: "Arxitektura",
    img: "https://png.pngtree.com/thumb_back/fh260/background/20230712/pngtree-architect-examining-a-3d-sketch-drawing-on-blueprint-image_3840181.jpg",
    description: "Binolarni hajmiy, joylashuv hamda landshaft jihatidan loyihalash"
  },
  {
    title: "Dizayn",
    img: "https://wallpaperset.com/w/full/e/0/c/313010.jpg",
    description: "Interyer, Eksteryer modellashtirish va Grafik dizayn"
  },
  {
    title: "Dasturlash",
    img: "https://blog.n8n.io/content/images/size/w1200/2025/02/11-ai-tools-coding--1-.png",
    description: "Frontend, Backend, Mobil va FullStack dasturlash"
  },
  {
    title: "Iqtisodiyot",
    img: "https://blog.n8n.io/content/images/size/w1200/2025/02/11-ai-tools-coding--1-.png",
    description: "Buxgalteriya, Smeta, Marketing kurslari"
  },
];

const Banner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000); // Change banner every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="md:pt-10 pt-5 block m-auto w-5/6 md:w-4/5 md:mx-auto">
      <motion.div
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="md:mx-auto md:pt-5 md:w-6/7 pt-5 rounded-2xl shadow-xl block m-auto relative overflow-hidden md:h-96 h-60"
        style={{
          backgroundImage: `url(${banners[index].img})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 md:bg-gradient-to-r bg-gradient-to-t md:from-black/75 from-black/90 via-black/40 to-transparent text-white flex flex-col justify-center p-5 md:p-20 h-full">
          <h1 className="md:text-7xl text-4xl md:font-bold font-semibold animate__animated animate__fadeInDown text-center md:text-left w-full m-auto md:m-0  animate__delay-1s">
            {banners[index].title}
          </h1>
          <p className="md:text-2xl text-lg md:font-semibold font-semibold pt-0 md:pt-5 text-center md:text-left md:w-1/2 w-full m-auto md:m-0  animate__animated animate__fadeInUp animate__delay-2s">
            {banners[index].description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
