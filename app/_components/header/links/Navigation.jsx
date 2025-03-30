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
    name: "Normativlar",
    url: "/normative_documents"
  },
  {
    name: "Dasturlar",
    url: "/programs"
  },
]

const Navigation= () => {
  return (
    <ul className="flex md:space-x-14 space-x-5 md:pt-0 pt-2"> 
      {urls.map((url, index) => (
        <li key={index}>
          <Link className='linkn font-light md:text-lg' href={url.url}>{url.name}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Navigation