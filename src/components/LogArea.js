import { useContext, useEffect, useState } from 'react'
import FitnessData from './FitnessData'
import Log from './Log'
import './LogArea.css'

const LogArea = () => {

    const { fitData } = useContext(FitnessData)
    const [content, setContent] = useState([])
    
    useEffect(() => {
       setContent(fitData) 
    },[])
    
    return (
        <div className='log-area'>
            {content[0]?content.map(logData => (
                <Log
                    key={content.indexOf(logData)}
                    time={logData.time}
                    category={logData.category}
                    muscles={logData.muscles}
                    title={logData.title}
                    duration={logData.duration}
                    notes={logData.notes} />
            )):null}
            
        </div>
    )
}
export default LogArea