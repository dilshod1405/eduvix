'use client'
import Link from "next/link"
import LoginIcon from '@mui/icons-material/Login';
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
    <div className=''>
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
          <Link href='/authentication/login' className='font-semibold text-white rounded-md md:text-lg'><LoginIcon/> Kirish</Link>
        </div>
      )}
    </div>
  )
}

export default Sign