import React from 'react'
import Stepper from '@mui/joy/Stepper';
import Step, { stepClasses } from '@mui/joy/Step';
import StepIndicator, { stepIndicatorClasses } from '@mui/joy/StepIndicator';
import Typography, { typographyClasses } from '@mui/joy/Typography';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

const data = [
    {
        title: "Vaqt va joy",
        description: "Istalgan vaqtda va istalgan joyda sifatli ta'lim olish imkoniyati"
    },
    {
        title: "Qo'llab quvvatlash",
        description: "Administratorlar tomonidan bepul va sifatli qo'llab quvvatlash imkoniyati"
    },
    {
        title: "Video uchrashuv",
        description: "Video uchrashuvlar orqali bilim almashish va savollarga javob topish imkoniyati"
    },
    {
        title: "Real loyihalar",
        description: "Real loyihalarda ishtirok etib tajriba orttirish imkoniyati"
    }
]
const Right = () => {
  return (
    <div className='md:float-right md:w-1/2'>
        <div className='md:text-3xl text-xl pt-7 md:pt-0 font-bold'>Ta'limga tizimli yondashuv</div>
        <div className='pt-10 w-1/2  m-auto'>
            <Stepper
                orientation="vertical"
                sx={(theme) => ({
                    '--Stepper-verticalGap': '2.5rem',
                    '--StepIndicator-size': '2.5rem',
                    '--Step-gap': '1rem',
                    '--Step-connectorInset': '0.5rem',
                    '--Step-connectorRadius': '1rem',
                    '--Step-connectorThickness': '4px',
                    '--joy-palette-success-solidBg': '#1e293b',
                    [`& .${stepClasses.completed}`]: {
                    '&::after': { bgcolor: '#1e293b' },
                    },
                    [`& .${stepClasses.active}`]: {
                    [`& .${stepIndicatorClasses.root}`]: {
                        border: '4px solid',
                        borderColor: '#fff',
                        boxShadow: `0 0 0 1px ${theme.vars.palette.primary[500]}`,
                    },
                    },
                    [`& .${stepClasses.disabled} *`]: {
                    color: 'neutral.softDisabledColor',
                    },
                    [`& .${typographyClasses['title-sm']}`]: {
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontSize: '10px',
                    },
                })}
                >
                {data.map((item, index) => (
                    <Step
                    key={index}
                    completed
                    indicator={
                    <StepIndicator variant="solid" color="success">
                        <CheckRoundedIcon />
                    </StepIndicator>
                    }
                >
                    <div>
                    <Typography level="title-sm">{item.title}</Typography>
                    <Typography level="body-sm">{item.description}</Typography>
                    </div>
                </Step>
                ))}
                
            </Stepper>
        </div>
        
    </div>
  )
}

export default Right