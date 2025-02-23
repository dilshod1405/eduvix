import React from 'react'
import Header from '../_components/header/Header'
import Footer from '../_components/footer/Footer'
import Filter from './Filter'

export const metadata = {
  title: 'ProHub | Kurslar',
} 

const page = () => {
  
  return (
    <div className=''>
      <Header />
      <div className='md:w-3/4 md:mx-auto pt-5 block m-auto'>
        <Filter />
      </div>
      <Footer />
    </div>
  )
}

export default page