import './CalendarHeatmap.css'
import Calendar from 'react-calendar'
import CalendarArea from './CalendarArea'
// import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';

const CalendarHeatmap = () => {

    const [value, onChange] = useState(new Date());
    
    return (
        <div className="calendar-heatmap">
            <div className='calendar-area'>
                <CalendarArea onChange={onChange} value={value} />
            </div>
        </div>
    )
}

export default CalendarHeatmap