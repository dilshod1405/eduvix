'use client'
import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function ModulesTab(props) {
  const [value, setValue] = React.useState('1');
  const modules = props.modules
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} indicatorColor='primary'>
            {modules.map((module) => (
              <Tab label={module.name} value={`${module.id}`} style={{color: '#1e293b', fontWeight: 'bold', fontSize: '16px', textTransform: 'uppercase', letterSpacing: '1px'}} />
            ))}
          </TabList>
        </Box>
        <TabPanel value={`${modules.id}`}>{modules.description}</TabPanel>
      </TabContext>
    </Box>
  );
}
