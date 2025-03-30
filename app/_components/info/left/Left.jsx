import React from 'react'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import AddTaskIcon from '@mui/icons-material/AddTask';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { animate } from 'framer-motion';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
}));

const data = [
  {
    title: "Real loyihalarda ishlash",
    description: "Barcha mutaxassislik kurslarimizda siz real loyihalar bilan ishlab tajriba orttirasiz.",
    icon: <AddTaskIcon fontSize='large' className='text-sky-600'/>,
    animate: "animate__animated animate__zoomIn animate__delay-1s"
  },
  {
    title: "Istalgan vaqtda va joyda",
    description: "Kunning istalgan vaqtida o'zingizga qulay manzildan turib sifatli ta'lim olasiz.",
    icon: <QueryBuilderIcon fontSize='large' className='text-sky-600'/>,
    animate: "animate__animated animate__zoomIn animate__delay-2s"
  },
  {
    title: "Qo'llab quvvatlash",
    description: "Telegram chatbotimiz sizga butun kun mobaynida savollaringizga javob beradi.",
    icon: <SupportAgentIcon fontSize='large' className='text-sky-600'/>,
    animate: "animate__animated animate__zoomIn animate__delay-3s"
  },
  {
    title: "Bo'lib to'lash imkoniyati",
    description: "Har bir kurs to'lovlarini modullarga bo'lgan holda to'lab borishingiz mumkin.",
    icon: <AttachMoneyIcon fontSize='large' className='text-sky-600'/>,
    animate: "animate__animated animate__zoomIn animate__delay-4s"
  },
]

const Left = () => {
 
  return (
    <div className='md:w-2/3 md:mx-auto pt-5'>
        <h1 className='md:text-4xl text-center md:text-left text-xl md:p-5 font-bold '>EduVix dasturining afzalliklari</h1>
        <section className=' pt-5 md:pl-5 md:pr-10 block m-auto'>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ flexGrow: 1 }}>
          {data.map((item, index) => (
            <Grid xs={12} sm={6} md={6} key={index} className='md:p-5 p-2'>
              <Item style={{ boxShadow: 'none' }} className={item.animate}>
                <div className='flex gap-5'>
                  <div className='text-3xl' >{item.icon}</div>
                  <div>
                    <div className='md:text-2xl text-lg font-semibold'>{item.title}</div>
                    <div className='md:text-lg text-sm'>{item.description}</div>
                  </div>
                </div>
              </Item>
            </Grid>
          ))}
        </Grid>
        </section>
    </div>
  )
}

export default Left