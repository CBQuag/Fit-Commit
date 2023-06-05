import { useContext } from 'react'
import FitnessData from './FitnessData'
import './Log.css'

const Log = (props) => {

    const {datediff}=useContext(FitnessData)

    const convertDate = date => {
        
        let convertedDate = new Date(date)
        let daysSince = datediff(convertedDate, Date.now())
        if (daysSince < 0)
            return `Invalid Date`
        if (daysSince < 1)
            return `Today`
        if (daysSince == 1)
            return `Yesterday`
        return daysSince+' Days'
    }

    const shrinkTitle = name => {
        if (name.length < 18)
            return name
        return name.substring(0, 18)+'...'
    }

    const convertTime = time => {
        let hours = Math.floor(time / 60);
        let minutes = time % 60
        let convertedMinutes;
        convertedMinutes =
            `${minutes ? hours ? `${minutes}`.length == 1 ? `0${minutes}` : minutes : minutes : `00`}`    
        
        return `${hours?`${hours}:`:``}${convertedMinutes}`
    }
    
    return (
        <div className='log'>
            <div className='info-box'>
                <p>{convertDate(props.time)}</p>
                <p>{shrinkTitle(props.title)}</p>
            </div>
            
            <div className='time-box'>
                <p>{convertTime(props.duration)}</p>
                <img src={require('../watch_time_clock_icon_221069.png')} alt="clock icon" />
            </div>
        </div>
    )
}

export default Log