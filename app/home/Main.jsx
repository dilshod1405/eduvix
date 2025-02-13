import React from 'react'
import Header from '../_components/header/Header'
import Banner from '../_components/banner/Banner'
import Info from '../_components/info/Info'

const Main = () => {
  return (
    <div className='snap-y snap-proximity h-screen overflow-y-scroll'>
      <Header />
      <Banner />
      <Info />
      
    </div>
  )
}

export default Main