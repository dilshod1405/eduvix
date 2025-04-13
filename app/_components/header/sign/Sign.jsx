'use client'
import Link from "next/link"
import { useEffect, useState } from "react";

const Sign = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [is_staff, setIs_staff] = useState(null);
  const [role, setRole] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setAccessToken(localStorage.getItem("access"));
      setRole(localStorage.getItem("role"));
    }
  }, []);

  return (
    <div className='md:pt-0 pt-3'>
      {accessToken ? (
        <div>
          <Link href='/authentication/client/dashboard' className='uppercase font-semibold text-sky-600 '>{role}</Link>
        </div>
      ) : (
        <div>
          <Link href='/authentication/login' className='font-semibold text-sky-600 rounded-2xl md:text-md border-2 border-sky-600 pr-7 pl-7 pt-2 pb-2 bg-sky-50 hover:bg-sky-600 hover:text-white transition-all ease-in-out duration-300'>Kirish</Link>
        </div>
      )}
    </div>
  )
}

export default Sign