import React from 'react'

const Right = () => {
  return (
    <div className='md:float-right md:w-1/2 md:mx-auto pt-5 md:pt-20'>
        <div className='absolute md:h-3/4 h-1/3 right-0 bg-sky-200 md:rounded-3xl md:w-1/3 w-3/4 m-auto pt-5 animate__animated animate__fadeInRight animate__delay-1s' style={{clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)', zIndex: -1}}>
        </div>
        <img style={{zIndex: 1}} src="https://png.pngtree.com/png-vector/20231208/ourmid/pngtree-smiling-woman-with-credit-card-and-laptop-blue-computer-png-image_10979822.png" alt="photo" className='md:rounded-2xl md:w-2/3 w-3/4 m-auto animate__animated animate__zoomIn animate__delay-2s'/>
    </div>
  )
}

export default Right