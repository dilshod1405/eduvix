'use client'
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Link from 'next/link';
import axios from 'axios';

export default function ModulesTab({ modules, lessons, user_id }) {
  const [value, setValue] = useState(modules[0]?.id.toString() || '1');
  const [paidModules, setPaidModules] = useState({});
  
  useEffect(() => {
    const preloadStatuses = async () => {
      try {
        const statusArray = await Promise.all(
          modules.map(async (module) => {
            try {
              const res = await axios.get(
                `${process.env.NEXT_PUBLIC_API_URL_PAYMENT}/payment/check-payment-status/${module.id}/${user_id}/`
              );
              return [module.id, res.data.status === 'paid'];
            } catch {
              return [module.id, false];
            }
          })
        );
  
        setPaidModules(Object.fromEntries(statusArray));
      } catch (error) {
        console.error('Error preloading payment statuses', error);
      }
    };
  
    preloadStatuses();
  }, [modules, user_id]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  const handleTabClick = (moduleId) => {
    setValue(moduleId);
  };
  const handleLessonClick = (lessonId) => {
    setValue(lessonId);
  }

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} indicatorColor='primary'>
            {modules.map((module) => (
              <Tab
                key={module.id}
                label={module.name}
                value={module.id.toString()}
                style={{
                  color: '#1e293b',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}
              />
            ))}
          </TabList>
        </Box>

        {modules.map((module) => (
          <TabPanel onClick={() => handleTabClick(module.id.toString())} key={module.id} value={module.id.toString()} style={{ padding: '10px' }}>
            {lessons
              .filter((lesson) => lesson.module.id === module.id)
              .map((lesson) => {
                const isPaid = paidModules[module.id];

                return (
                  <div key={lesson.id} className='border-b-2 border-slate-200 pt-5 pb-5'>
                    {isPaid ? (
                      <Link
                        onClick={() => handleLessonClick(lesson.id)}
                        aria-label={`Watch lesson ${lesson.name}`}
                        title={`Watch lesson ${lesson.name}`}
                        href={`/video/${lesson.module.speciality.id}/${lesson.module.id}/${lesson.id}`}
                        className='font-semibold md:text-lg text-slate-700 flex flex-row'
                      >
                        <PlayCircleIcon className='mr-2' />
                        {lesson.name}
                      </Link>
                    ) : (
                      <div className='font-semibold md:text-lg text-slate-400 flex flex-row cursor-not-allowed opacity-50'>
                        <PlayCircleIcon className='mr-2' />
                        (To'lanmagan) - {lesson.name}
                      </div>
                    )}
                  </div>
                );
              })}
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
}
