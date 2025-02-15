'use client';

import { useState, useEffect, useRef } from 'react';

const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

const Counter = ({ end, duration = 4000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const frameRate = 1000 / 60; // 60fps
  const totalFrames = Math.round(duration / frameRate);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          setCount(0); // Reset count each time it scrolls into view

          const counter = setInterval(() => {
            start++;
            const progress = easeOutExpo(start / totalFrames);
            setCount(Math.round(end * progress));

            if (start === totalFrames) {
              clearInterval(counter);
            }
          }, frameRate);
        }
      },
      { threshold: 0.7 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [end, duration]);

  return (
    <div ref={ref} className="md:text-5xl text-3xl font-bold text-center">
      + {count}
    </div>
  );
};

export default Counter;
