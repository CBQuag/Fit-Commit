import { useContext, useEffect, useState } from 'react';
import './CalendarArea.css'
import FitnessData from './FitnessData';

const CalendarArea = () => {

    const intensity=2
    
    const [dayList, setDayList] = useState([])
    const [monthChange, changeMonth] = useState(0)
    const { fitData, datediff } = useContext(FitnessData)
    
    const daysInMonth = (year, month) => new Date(year, month, 0).getDate();
    const monthNames=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September','October', 'November', 'December']

    const drawCalendar = (dateInt) => {
        const date=new Date(dateInt)
        const year = date.getFullYear();
        const month = date.getMonth();
        const monthTotal = daysInMonth(year, month + 1);

        const firstDay = new Date(year, month, 1);
        const lastDay=new Date(year,month,monthTotal)
        const lastMonth = daysInMonth(year, month);
        let days = [];

        const carryOver = lastMonth - firstDay.getDay() + 1;
        
        for (let x = carryOver; x <= lastMonth; x++){
            const oneDay = new Date(year, month-1, x)
            days.push({ day: oneDay, color: ['black','gray',`none`] })
        }
        for (let x = 1; x <= monthTotal; x++){
            const oneDay = new Date(year, month, x)
            
            const colorNum = [...fitData.filter(
                fit =>datediff(oneDay.getTime(), fit.time) == 0)]
                    .reduce(
                        (sum, a) =>sum + a.duration, 0);

            days.push({
                day: oneDay,
                color: [
                    `rgb(${0+(colorNum)*intensity},${64 + (colorNum*(3/4))*intensity},${128 + (colorNum/2)*intensity})`,
                    ``,
                    colorNum > 0 ? `2px solid white` : `none`]
            })
        }
        for (let x = 1; x < 7 - lastDay.getDay(); x++){
            const oneDay = new Date(year, month, x)
            days.push({ day: oneDay, color: ['black', 'gray',`none`] })
        }
        setDayList(days)
    }
    
    useEffect(() => {
        drawCalendar(Date.now())    
    }, [])
    useEffect(() => {
        const dateObj = new Date();
        const changedDate = new Date(dateObj.getFullYear(), dateObj.getMonth() + monthChange, 1)
        drawCalendar(changedDate.getTime())    
    }, [monthChange])

    return (
        <div>
            <div className='month-area'>
                <button
                    onClick={() => changeMonth(monthChange - 1)}
                    className='navigation nav-left'>
                    <img
                        className='nav-icon-left'
                        src={require('../triangle.png')} alt="left" />
                </button>
                <h2>{dayList[10]?monthNames[dayList[10].day.getMonth()]:null}</h2>
                <button
                    onClick={() => changeMonth(monthChange + 1)}
                    className='navigation nav-right'>
                    <img
                        className='nav-icon-right'
                        src={require('../triangle.png')} alt="left" />
                </button>
            </div>
            <div className='day-area'>
                {dayList[0]?dayList.map((day, index) => (
                    <div className='day' key={index}
                        style={{
                            backgroundColor: day.color[0],
                            color:day.color[1],
                            outline:day.color[2]
                        }}>
                        {day.day.getDate()}
                    </div>)):null
                }
            </div>
        </div>
    )
}

export default CalendarArea