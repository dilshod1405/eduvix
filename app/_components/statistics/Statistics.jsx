'use client'
import React from 'react'
import Grid from '@mui/joy/Grid';
import { styled } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Counter from './Counter';


const Item = styled(Sheet)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography['body-sm'],
  padding: theme.spacing(1),
  textAlign: 'center',
  borderRadius: 4,
  color: theme.vars.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: theme.palette.background.level1,
  }),
}));

const data = [
  {
    title: "O'quvchilarimiz soni",
    number: 500
  },
  {
    title: "Yozilgan darslar soni",
    number: 100
  },
  {
    title: "Mentorlar soni",
    number: 50
  }
]

const Statistics = () => {
  return (
    <div className='md:pt-20 md:pb-10 w-3/4 md:mx-auto pt-5 md:pl-20 md:pr-20 block m-auto text-center h-50'>
        <div className='md:text-4xl text-xl pt-7 md:pt-0 font-bold text-center text-indigo-500'>Umumiy statistika</div>
        <div className='pt-10'>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            sx={{ flexGrow: 1 }}
          >
            {data.map((item, index) => (
              <Grid xs={4} sm={4} md={4} key={index} className=' shadow-[0px_1px_4px_rgba(0, 0, 0, 0.16)] border-r-2 border-l-2 border-indigo-500'>
                <Item>
                  <div className='md:text-lg pt-3 pb-3'>{item.title}</div>
                  <div className='md:text-5xl text-3xl font-bold pt-2'><Counter end={item.number} duration={1000} /></div>
                </Item>
              </Grid>
            ))}
          </Grid>
        </div>
    </div>
  )
}

export default Statistics