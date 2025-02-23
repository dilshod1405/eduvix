import React from 'react'

const CourseDisplay = (props) => {
    const course = props.course
    
  return (
    <div className='md:pt-10 md:w-3/4 md:mx-auto pt-5 md:pl-20 md:pr-20 block m-auto h-50 bg-indigo-50 md:mt-10 md:rounded-2xl'>
        <div className='md:text-4xl text-xl md:pt-3 font-bold text-center text-indigo-500'>{course.name}</div>

    </div>
  )
}

export default CourseDisplay