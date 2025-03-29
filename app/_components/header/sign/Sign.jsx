'use client'
import Link from "next/link"
import { useEffect, useState } from "react";

const Sign = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [is_staff, setIs_staff] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setAccessToken(localStorage.getItem("access"));
      setIs_staff(localStorage.getItem("is_staff"));
    }
  }, []);

  return (
    <div className='md:pt-0 pt-6'>
      {accessToken ? (
        <div>
          {is_staff === 'true' ? (
            <Link href='/authentication/admin/dashboard' className=''>Admin</Link>
          ) : (
            <Link href='/authentication/client/dashboard' className=''>Profile</Link>
          )}
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