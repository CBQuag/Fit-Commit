import { useState } from 'react'
import './SubmitArea.css'
import SubmitBox from './SubmitBox'

const SubmitArea = () => {
    
    const [active, setActive] = useState('none')
    
    const switchActive = () => {
        if (active == 'none')
            return setActive('block')
        setActive('none')
    }

    return (
        <div>
            <div className="submit-area" onClick={()=>switchActive()}>
            Submit
            </div>
            <SubmitBox isActive={active} />
        </div>    
    )
}
export default SubmitArea