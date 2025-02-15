import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect } from 'react';
import AOS from 'aos'; // Import AOS library

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Optional: Set duration for animation
      once: true, // Optional: Ensure animation happens only once
    });
  }, []); // Initialize AOS once when the app loads

  return <Component {...pageProps} />;
}

export default MyApp;
