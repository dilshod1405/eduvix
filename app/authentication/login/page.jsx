'use client'
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Link from 'next/link';
import { login } from '../authConfig/AuthService';
import CircularProgress from '@mui/material/CircularProgress';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { signIn, getSession } from 'next-auth/react';

const Page = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const { access, role, refresh } = await login(username, password);

      // Store token securely (use httpOnly cookies in production!)
      localStorage.setItem('access', access);
      localStorage.setItem('refresh', refresh);
      localStorage.setItem('role', role);

      router.push('/');
    } catch (err) {
      setError(err?.response?.data?.detail || err.message || "Xatolik yuz berdi");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signIn('google', { redirect: false });
  
      if (result?.error) {
        console.error("Google login failed:", result.error);
        setError(result.error);
        return;
      }
  
      // Fetch session after the Google sign-in
      const session = await getSession();
      const idToken = session?.idToken;  // Make sure you're saving id_token in your NextAuth JWT callback!
  
      if (!idToken) {
        console.error("No ID token found in session!");
        setError("Google identifikatsiyasi topilmadi.");
        return;
      }
  
      // Send the token to your Django backend
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL_AUTH}/authentication/auth/google/`, {
        token: idToken
      })
      if (response.status === 200) {
        localStorage.setItem("access", response.data.access);
        localStorage.setItem("refresh", response.data.refresh);
        localStorage.setItem("role", response.data.role);
        console.log("Tokens saved, redirecting...");
        router.push("/");
    } else {
        console.log("Failed to log in, status:", response.status);
    }
  
      // Store the tokens (access, refresh) after the successful login
      if (response?.data?.access && response?.data?.refresh) {
        localStorage.setItem('access', response.data.access);
        localStorage.setItem('refresh', response.data.refresh);
        localStorage.setItem('role', response.data.user.role);

        router.push('/');
      } else {
        console.error("Backend did not return the expected token data");
        setError("Token saqlashda xatolik yuz berdi.");
      }
  
    } catch (error) {
      console.error("Backend auth error:", error.response?.data || error.message);
      setError(error.response?.data?.detail || error.message || "Google orqali kirish muvaffaqiyatsiz.");
    }
  };
  

  return (
    <div className='flex flex-col items-center justify-center md:h-screen h-full'>
      <section className='flex flex-col md:w-2/5 w-full m-auto md:rounded-2xl'>
        <form onSubmit={handleLogin} className='bg-slate-50 flex flex-col items-center justify-center md:w-3/4 w-full m-auto md:h-50 h-full md:rounded-2xl pb-10 shadow-lg'>
          <h2 className='text-3xl font-bold text-sky-600 md:text-4xl pt-3 mb-5'>Login</h2>

          <div>
            <TextField className='w-full' id="outlined-basic" label="Foydalanuvchi nomi" variant="outlined" onChange={(e) => setUsername(e.target.value)} />
          </div>

          <div className='mt-5'>
            <TextField className='w-full' id="outlined-password-input" label="Parol" type='password' autoComplete='current-password' onChange={(e) => setPassword(e.target.value)} />
          </div>

          {error && <div className='mb-3 mt-3 text-red-500 text-center'>{error}</div>}

          <div className='mt-5'>
            <Button variant="contained" className='md:mt-5' type='submit'>
              {loading ? <CircularProgress style={{ color: 'white', width: '20px', height: '20px' }} /> : 'Kirish'}
            </Button>
          </div>

          <p className='mt-5'>yoki</p>

          <div className='mt-5'>
            <Button onClick={handleGoogleLogin} variant="outlined">
              <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" className='w-10' alt="Google" /> Google orqali kirish
            </Button>
          </div>

          <div className='mt-5'>
            <p>Akkauntingiz yo'qmi? <Link href={'/authentication/forgot'} className='text-sky-600 font-semibold'>Ro'yxatdan o'tish</Link></p>
          </div>

          <div className='mt-3 flex flex-row justify-between'>
            <Link href={'/authentication/forgot'} className='text-sky-600 font-semibold p-2'>Parolni unutdingizmi?</Link>
            <Link href={'/'} className='text-sky-600 font-semibold p-2'>Bosh sahifa</Link>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Page;
