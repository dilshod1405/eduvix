import React from 'react'
import ModulesTab from './ModulesTab'
import PersonIcon from '@mui/icons-material/Person';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import WarningIcon from '@mui/icons-material/Warning';
import TopicIcon from '@mui/icons-material/Topic';

const CourseDisplay = (props) => {
    const course = props.course
    const module = props.filteredModules
    const lessons = props.filteredLessons
    
    const data = [
      {
        question: "Kurs kimlar uchun ?",
        answer: course.for_who,
        icon: <PersonIcon fontSize='large' style={{fontSize: '42px'}}/>
      },
      {
        question: "Kurs davomiyligi qancha ?",
        answer: `${course.duration} ta moduldan iborat. Har bir modulga qancha vaqt sarflash o'zingizga bog'liq.`,
        icon: <AccessTimeFilledIcon fontSize='large' style={{fontSize: '42px'}}/>
      },
      {
        question: "Nima talab etiladi ?",
        answer: course.requirements,
        icon: <WarningIcon fontSize='large' style={{fontSize: '42px'}}/>
      },
      {
        question: "Kursda nima o'rgatiladi ?",
        answer: course.what_will_you_learn,
        icon: <TopicIcon fontSize='large' style={{fontSize: '42px'}}/>
      }
    ]
  return (
    <div className='md:pt-10 md:w-3/4 md:mx-auto pt-5 md:pl-20 md:pr-20 block m-auto h-50  md:mt-10 md:rounded-2xl md:pb-10 md:h-screen items-center justify-center'>
        <h1 className='md:text-4xl text-xl md:pt-3 font-bold text-center text-sky-600'>{course.name}</h1>
        <section className='md:pt-10 md:text-lg text-sm text-justify flex md:flex-row flex-col md:justify-between'>
            {data.map((item, index) => (
                <div key={index} className='md:w-1/4 w-3/4 p-5 bg-sky-50 md:rounded-2xl md:mr-5 text-center md:mb-0 mb-5 md:mt-0 mt-5 m-auto'>
                  <h2 className=' md:pt-3 pt-2 md:text-3xl text-xl font-bold text-center text-sky-300'>{item.icon}</h2>
                  <span className='font-semibold md:text-xl text-sm'>{item.question}</span>
                  <p className='md:pt-5 pt-2 md:text-lg text-sm '>{item.answer}</p>
                </div>
            ))}
        </section>
        <section className='md:pt-10 md:text-lg text-sm text-justify w-3/4 m-auto'>
        <ModulesTab modules={module} course={course} lessons={lessons} userId={1} />
        </section>
    </div>
  )
}

export default CourseDisplay