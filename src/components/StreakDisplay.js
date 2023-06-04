import { useContext, useEffect, useState } from 'react'
import FitnessData from './FitnessData'
import './StreakDisplay.css'

const StreakDisplay = () => {

    const { datediff } = useContext(FitnessData)
    const { fitData } = useContext(FitnessData)

    const [totalStreak, setStreak] = useState(0);
    const [streakOn, setStreakOn] = useState({ display: 'none' })
    const [streakOff, setStreakOff]=useState({display:'block'})

    useEffect(() => {
        if (!fitData[0])
            return
        switchTheLights(fitData)    
    },[])
    
    const switchTheLights = data => {
        let convertedDate=new Date(data[0].time)
        let daysSince = datediff(convertedDate, Date.now())
        if (daysSince < 1) {
            setStreakOn({ display: 'block' })
            setStreakOff({ display: 'none' })
            getStreak(fitData)
        }
        if (daysSince > 1) {
            setStreakOn({ display: 'none' })
            setStreakOff({ display: 'block' })
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
        setStreak(prevDay+1)
    }
   
    
    return (
        <div className='streak-box'>
            <img style={streakOff} className='streak-off' src={require('../streak-off.png')} alt="" />
            <img style={streakOn} className='streak-on' src={require('../streak-on.png')} alt="" /> <h3>{totalStreak}</h3>
        </div>
    )
}

export default StreakDisplay