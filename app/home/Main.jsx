import React from 'react'
import Header from '../_components/header/Header'
import Banner from '../_components/banner/Banner'

const Main = () => {
  return (
    <div className='snap-y snap-proximity h-screen overflow-y-scroll'>
      <Header />
      <div className='snap-start h-screen'>
        <Banner />
      </div>
      
    </div>
  )
}

export default Main