import { useContext, useEffect, useState } from 'react'
import FitnessData from './FitnessData'
import './SelectionInfo.css'

const SelectionInfo = () => {

    const { bodySelection } = useContext(FitnessData);
    const [info, setInfo] = useState('');

    useEffect(() => {
        setInfo(bodySelection)
    },[bodySelection])
    
    return (
        <div style={info ? { display: 'block' }:{display:'none'}} className="selection-info">
            {bodySelection}
        </div>
    )
}

export default SelectionInfo