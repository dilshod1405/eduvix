"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,  // Set to false to allow re-triggering
      mirror: true, // Allows animations when scrolling back up
    });

    setTimeout(() => {
      AOS.refreshHard(); // Forces AOS to update
    }, 500);

  }, []);

  return null;
}
