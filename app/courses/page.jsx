import React from 'react'
import Header from '../_components/header/Header'
import Footer from '../_components/footer/Footer'
import Filter from './Filter'

export const metadata = {
  title: 'Edvent | Kurslar',
} 

const page = () => {
  
  return (
    <div className='min-h-screen'>
      <Header />
      <div className='md:mx-auto pt-5 block m-auto'>
        <Filter />
      </div>
      <Footer />
    </div>
  )
}

export default page