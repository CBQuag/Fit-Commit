import { useContext, useEffect, useState } from 'react'
import FitnessData from './FitnessData'
import './StreakDisplay.css'

const StreakDisplay = () => {

    const { datediff } = useContext(FitnessData)
    const { fitData } = useContext(FitnessData)

    let streakOn = {display:'none'};
    let streakOff = { display: 'block' };
    const [totalStreak, setStreak] = useState(0);

    useEffect(() => {
        if (!fitData)
            return
        switchTheLights(fitData)
        getStreak(fitData)
    },[])
    
    const switchTheLights = data => {
        let convertedDate=new Date(data[0].time)
        let daysSince = datediff(convertedDate, Date.now())
        if (daysSince < 1) {
            streakOn = { display: 'block' }
            streakOff = { display: 'none' }
            
        }
        if (daysSince > 1) {
            streakOn = { display: 'none' }
            streakOff = { display: 'block' }
        }
    }

    const getStreak = data => {
        let prevDay = 0;
        let daysSince = 0;
        for (let x = 0; x < data.length; x++){
            let convertedDate = new Date(data[x].time)
            daysSince= datediff(convertedDate, Date.now())
            if (daysSince - prevDay < 2)
                prevDay = daysSince
            else
                break;
        }
        setStreak(prevDay)
    }

    if (fitData) {
        switchTheLights(fitData)
    }     
    
    return (
        <div className='streak-box'>
            <img style={streakOff} className='streak-off' src={require('../streak-off.png')} alt="" />
            <img style={streakOn} className='streak-on' src={require('../streak-on.png')} alt="" /> <h3>{totalStreak}</h3>
        </div>
    )
}

export default StreakDisplay