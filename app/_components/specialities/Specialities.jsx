'use client'
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const Specialities = () => {
  const [specialities, setSpecialities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSpecialities = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL_EDU}/edu/modules/`);
        setSpecialities(response.data);
      } catch (err) {
        setError("Failed to fetch specialities");
      } finally {
        setLoading(false);
      }
    };
    
    fetchSpecialities();
  }, []);

  return (
    <div className='md:pt-20 md:w-3/4 md:mx-auto pt-5 md:pl-20 md:pr-20 block m-auto h-50'>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div></div>
        ) : (
          <div className='md:text-4xl text-xl pt-7 md:pt-0 font-bold text-center text-indigo-500'>Hozirda mavjud o'quv kurslar</div>
        )}
        
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <></>
        ) : (
          <div className='md:pt-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 pt-10 text-center w-2/9 m-auto md:pt-10'>
              {specialities.map((item, index) => (
                <div className="pl-2 pr-2 w-3/4 m-auto shadow-lg rounded-2xl border-t-4 hover:shadow-xl md:h-44 h-40 transition duration-300 border-indigo-500 " key={index}>
                  <div className="md:text-xl text-sm font-semibold pt-5">{item.speciality.name}</div>
                  <div className="md:text-sm text-xs pt-5">Mentor: <span className="text-indigo-500 font-semibold">{item.speciality.teacher.user.first_name} {item.speciality.teacher.user.last_name}</span></div>
                  <div className='pt-5'>
                    <Link href={`/course/${item.id}`} className='p-2 bg-indigo-500 text-white font-semibold transition duration-300 rounded-md text-xs md:text-sm hover:shadow-lg'>Kursni ko'rish</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
    </div>
  )
}

export default Specialities