import { useContext } from 'react'
import FitnessData from './FitnessData'
import Log from './Log'
import './LogArea.css'

const LogArea = () => {

    const { fitData } = useContext(FitnessData)
    
    return (
        <div className='log-area'>
            {fitData.map(logData => (
                <Log
                    key={logData.title}
                    time={logData.time}
                    category={logData.category}
                    title={logData.title}
                    duration={logData.duration}
                    notes={logData.notes} />
            ))}
            
        </div>
    )
}
export default LogArea