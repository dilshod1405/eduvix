'use client'
import React from 'react'
import { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Link from 'next/link';
import { login } from '../authConfig/AuthService';
import CircularProgress from '@mui/material/CircularProgress';

const page = () => {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState(false)
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { access, role, refresh } = await login(username, password);

      // Store token securely (consider httpOnly cookies in production)
      localStorage.setItem('access', access);
      localStorage.setItem('refresh', refresh);
      localStorage.setItem('role', role);
      
      // Redirect based on role
      const roleRoutes = {
        student: '/authentication/student/dashboard',
        teacher: '',
      };

      navigate(roleRoutes[role] || '/');
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className=''>
      
      <div className='flex flex-col items-center justify-center md:h-screen h-full bg-slate-50'>
          <section className='flex flex-col md:w-2/5 w-full m-auto md:rounded-2xl '>
            
            <form onSubmit={handleLogin} className='flex flex-col items-center justify-center md:w-3/4 w-full m-auto md:h-50 h-full md:rounded-2xl pb-10 shadow-lg'>
            <h2 className='text-3xl font-bold text-sky-600 md:text-4xl pt-3 mb-5'>Login</h2>
              <div className=''>
                <TextField className='w-full' id="outlined-basic" label="username" variant="outlined" onChange={(e) => setUsername(e.target.value)}/>
              </div>
              <div className='mt-5'>
                <TextField className='w-full' id="outlined-password-input" label="parol" type='password' autoComplete='current-password' onChange={(e) => setPassword(e.target.value)}/>
              </div>
              {error && <div className='mb-3 mt-3 text-red-500 text-center'>{error}</div>}
              <div className='mt-5'>
                <Button variant="contained" className='md:mt-5' type='submit'>
                  {loading ? <CircularProgress style={{color: 'white', width: '20px', height: '20px'}}/> : 'Kirish'}
                </Button>
              </div>
              <p className='mt-5'>yoki</p>
              <div className='mt-5'>
                <Button variant="outlined" ><img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" className='w-10' alt="" /> Google orqali kirish</Button>
              </div>
              <div className='mt-5'>
                <p>Akkauntingiz yo'qmi ? <Link href={'/authentication/forgot'} className='text-sky-600 font-semibold'>Ro'yxatdan o'tish</Link></p>
              </div>
              <div className='mt-3 flex flex-row justify-between'>
                <Link href={'/authentication/forgot'} className='text-sky-600 font-semibold p-2'>Parolni unutdingizmi ?</Link>
                <Link href={'/'} className='text-sky-600 font-semibold p-2'>Bosh sahifa</Link>
              </div>
            </form>
          </section>
      </div>
      
    </div>
  )
}

export default page