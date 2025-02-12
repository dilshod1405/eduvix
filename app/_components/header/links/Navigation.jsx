import Link from 'next/link'
import React from 'react'
import Sign from '../sign/Sign'

const urls = [
  {
    name: "Kurslar",
    url: "/courses"
  },
  {
    name: "Imtihonlar",
    url: "/exams"
  },
  {
    name: "Dayjestlar",
    url: "/events"
  }
]

const Navigation= () => {
  return (
    <ul className="flex space-x-4 pt-1"> 
      {urls.map((url, index) => (
        <li key={index}>
          <Link className='linkn font-semibold md:text-lg' href={url.url}>{url.name}</Link>
        </li>
      ))}
      <Sign />
    </ul>
  )
}

export default Navigation