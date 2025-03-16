import React from 'react'
import ModulesTab from './ModulesTab'

const CourseDisplay = (props) => {
    const course = props.course
    const module = props.filteredModules
    console.log(props);
    
    const data = [
      {
        question: "Kurs kimlar uchun ?",
        answer: course.for_who
      },
      {
        question: "Kurs davomiyligi qancha ?",
        answer: `${course.duration} ta moduldan iborat. Har bir modulga qancha vaqt sarflash o'zingizga bog'liq.`
      },
      {
        question: "Nima talab etiladi ?",
        answer: course.requirements
      },
      {
        question: "Kursda nima o'rgatiladi ?",
        answer: course.what_will_you_learn
      }
    ]
  return (
    <div className='md:pt-10 md:w-3/4 md:mx-auto pt-5 md:pl-20 md:pr-20 block m-auto h-50 bg-slate-100 md:mt-10 md:rounded-2xl md:pb-10'>
        <h1 className='md:text-4xl text-xl md:pt-3 font-bold text-center text-slate-600'>{course.name}</h1>
        <section className='md:pt-10 md:text-lg text-sm text-justify flex flex-row md:justify-between'>
            {data.map((item, index) => (
                <div key={index} className='md:w-1/4 w-3/4 p-5 bg-slate-200 md:rounded-2xl md:mr-5 text-center'>
                  <span className='font-semibold text-slate-500 md:text-xl text-sm'>{item.question}</span>
                  <p className='md:pt-5 pt-2 md:text-lg text-sm text-slate-700'>{item.answer}</p>
                </div>
            ))}
        </section>
        <section className='md:pt-10 md:text-lg text-sm text-justify w-3/4 m-auto'>
            <ModulesTab modules={module} course={course}/>
        </section>
    </div>
  )
}

export default CourseDisplay