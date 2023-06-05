import { useContext, useEffect, useState } from 'react'
import FitnessData from './FitnessData'
import './StreakDisplay.css'

const StreakDisplay = () => {

    const { datediff } = useContext(FitnessData)
    const { fitData } = useContext(FitnessData)

    const [totalStreak, setStreak] = useState(0);
    const [streakOn, setStreakOn] = useState({ display: 'none' })
    const [streakOff, setStreakOff] = useState({ display: 'block' })
    const [isStreak, setIfStreak]=useState({color:`gray`})

    useEffect(() => {
        if (!fitData[0])
            return
        switchTheLights(fitData) 
        getStreak(fitData)   
    },[])
    
    const switchTheLights = data => {
        let daysSince = datediff(data[0].time, Date.now())
        if (daysSince < 1) {
            setStreakOn({ display: 'block' })
            setStreakOff({ display: 'none' })
            setIfStreak({color:`white`})                
        }
        if (daysSince > 1) {
            setStreakOn({ display: 'none' })
            setStreakOff({ display: 'block' })
        }
    }

    const getStreak = data => {
        let prevDay = 0;
        let daysSince = 0;
        let noStreak = 0;
        if (datediff(data[0].time, Date.now()) > 1)
            return setStreak(0)
        if (datediff(data[0].time, Date.now()) == 1)
            noStreak=1
        for (let x = 0; x < data.length; x++){
            daysSince = datediff(data[x].time, Date.now())
            
            if (daysSince - prevDay < 2)
                prevDay = daysSince
            else
                break;
        }
        setStreak(prevDay+1-noStreak)
    }
   

    return (
        <div className='streak-box'>
            <img style={streakOff} className='streak-off' src={require('../streak-off.png')} alt="" />
            <img style={streakOn} className='streak-on' src={require('../streak-on.png')} alt="" />
            <h3 style={isStreak}>{totalStreak}</h3>
        </div>
    )
}

export default StreakDisplay