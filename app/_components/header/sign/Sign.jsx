'use client'
import Link from "next/link"
import LoginIcon from '@mui/icons-material/Login';

const Sign = () => {
  const accessToken = localStorage.getItem('accessToken')
  const is_staff = localStorage.getItem('is_staff')
  const photo = localStorage.getItem('photo')

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
          <Link href='/authentication/login' className='link p-2 bg-indigo-500 text-white rounded-md md:text-lg'><LoginIcon/> Kirish</Link>
        </div>
      )}
    </div>
  )
}

export default Sign