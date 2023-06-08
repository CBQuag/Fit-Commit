import { useContext, useEffect, useState } from 'react'
import FitnessData from './FitnessData'
import './PointsDisplay.css'

const PointsDisplay = () => {

    const { fitData } = useContext(FitnessData)
    
    const [points, setPoints] = useState(0)

    useEffect(() => {
        if (!fitData[0])
            return
        determinePoints(fitData)
    },[fitData])
    
    const determinePoints = data => {
        let totalPoints = data.reduce((partialSum, a) => partialSum + a.duration, 0)
        setPoints(Math.floor(totalPoints/60))
    }
    
    return (
        <div className='xp-display'>
            <span className="xp">XP</span> <h3>{points}</h3>
        </div>
    )
}
export default PointsDisplay