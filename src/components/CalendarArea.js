import { useEffect, useState } from 'react';
import './CalendarArea.css'

const CalendarArea = () => {
    
    const[dayList,setDayList]=useState([])
    
    const daysInMonth = (year, month) => new Date(year, month, 0).getDate();
    const drawCalendar = (dateInt) => {
        const date=new Date(dateInt)
        const year = date.getFullYear();
        const month= date.getMonth() + 1
        const monthTotal = daysInMonth(year, month);
        let days = [];
        for (let x = 1; x <= monthTotal; x++){
            const oneDay=new Date(`${year} ${month} ${x}`)
            days.push(oneDay)
        }
        setDayList(days)
    }
    
    useEffect(() => {
        drawCalendar(Date.now())    
    }, [])

    return (
        <div className='day-area'>
            {dayList.map((day, index) => (
                <div className='day' key={index}>
                    {day.getDate()}
                </div>))
            }
        </div>
    )
}

export default CalendarArea