import React from 'react'
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';

const data = [
    {
        question: "Kurs uchun qanday kompyuter yoki noutbuk olishim kerak ?",
        answer: "Bu sizning mablag'ingizga va maqsadingizga bog'liq. Masalan agar siz AutoCAD yoki Corel va shunga o'xshagan yengilroq dasturlarda ishlasangiz juda kuchli xarasteristikali kompyuter shart emas. Bu qaysi kursni o'qishingizga ham bog'liq. Masalan, Konstruksiya, Arxitekturaviy loyihalash kabi kurslarda siz asosan AutoCAD dan foydalanasiz. Agar siz BIM texnologiyalari yani Revitda ishlashga qiziqsangiz yoki dizayn qilish uchun 3d max kabi og'ir dasturlarda ishlashingizga to'g'ri kelsa albatta kamida CORE i5 RAM 8 xarasteristikali kompyuter tavsiya etiladi."
    },
    {
        question: "Dars o'tish jarayonini bilish uchun bepul sinov kurslar mavjudmi ?",
        answer: "Har bitta yo'nalishdagi kursning birinchi darsini bepul ko'rish imkoniyati mavjud. Bunda siz darsning qay darajada sifatliligi, mentorning mahorati va bilimi haqida batafsil ma'lumotga ega bo'lishingiz mumkin."
    },
    {
        question: "Kurs uchun to'lovlar qanday usullarda amalga oshirilishi mumkin ?",
        answer: "Platformamizda UZCARD, HUMO, VISA, MASTER kartalari yordamida Click, Payme, Paynet va Payze orqali to'lov qilishingiz mumkin."
    },
    {
        question: "Kursni sotib olganimdan keyin undan qancha vaqt foydalana olaman ?",
        answer: "Kursni sotib olganingizdan keyin u sizga davomiy xizmat qiladi. Davlatimizning qurilish sohasidagi qonunlariga o'zgartirishlar kiritishi yoki IT sohasida yangi texnologiyalarning ishlab chiqilishi natijasida kurslarning yangilinishi amalga oshirilgan taqdirda ham u sizda bepul saqlanib turadi."
    },
    {
        question: "Qancha vaqtda kursni tugata olaman ?",
        answer: "Bu sizning kursga qanchalik darajada vaqt ajratishingiz va vazifalarga etiborli bo'lishingizga bog'liq. Har bir mutaxassislik kursi qiyinlik darajasiga ko'ra modullarga bo'lingan."
    },
    {
        question: "Kurslarni tugatganlar uchun sertifikat beriladimi ?",
        answer: "Tanlagan kursingizni muvaffaqiyatli to'liq tugatgan taqdiringizda sizga sertifikat taqdim etiladi. Eslatib o'tamiz ! Ayrim mutaxassisliklarning murakkabligini inobatga olgan holda qo'shimcha imtihonlar mavjud. Bunday vaziyatda siz imtihondan o'tib sertifikat olishingiz mumkin. Imtihonlar bo'limida batafsil ma'lumot olasiz."
    },
]

const Explanation = () => {
  return (
    <div className='md:pt-10 md:w-3/4 w-11/12 md:mx-auto pt-10 block m-auto h-50 pb-10'>
        <div className='md:text-4xl text-xl md:pt-7 font-semibold text-center'>Savollarga javoblar</div>
        <div className='md:pt-10 pt-5 h-50 m-auto md:w-3/4'>
            <AccordionGroup sx={{ maxWidth: 1000 }}>
                {data.map((item, index) => (
                    <Accordion key={index} className='mb-3 rounded-md md:text-lg text-sm bg-slate-50'>
                        <AccordionSummary className='md:text-lg text-sm font-semibold bg-sky-100'>{item.question}</AccordionSummary>
                        <AccordionDetails className='md:text-lg text-sm font-semibold text-justify'>{item.answer}</AccordionDetails>
                    </Accordion>
                ))}
            </AccordionGroup>
        </div>
    </div>
  )
}

export default Explanation