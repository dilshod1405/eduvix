'use client'
import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Link from 'next/link';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

export default function ModulesTab(props) {
  const [value, setValue] = React.useState('1');
  const [access, setAccess] = React.useState(false);
  const modules = props.modules
  const lessons = props.lessons
  console.log(lessons);
  
  const checkUser = () => {
    const user = localStorage.getItem('user');
    if (user) {
      setAccess(true);
      return true;
    } else {
      return false;
    }
  };
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} indicatorColor='primary'>
            {modules.map((module, index) => (
              <Tab key={index} label={module.name} value={`${module.id}`} style={{color: '#1e293b', fontWeight: 'bold', fontSize: '16px', textTransform: 'uppercase', letterSpacing: '1px'}} >
                salom
              </Tab>
            ))}
          </TabList>
        </Box>
        {lessons.map((lesson, index) => (
          <div className='border-b-2 border-slate-200 pt-5 pb-5'>
            <TabPanel key={index} value={`${lesson.module.id}`} style={{padding: '10px', margin: '0px'}}>
              <Link aria-disabled={!checkUser()} href={`/video/${lesson.module.speciality.id}/${lesson.module.id}/${lesson.id}`} className='font-semibold md:text-lg text-slate-700 flex flex-row'><PlayCircleIcon className='mr-2'/> {index + 1} - {lesson.name}</Link>
            </TabPanel>
          </div>
        ))}
      </TabContext>
    </Box>
  );
}