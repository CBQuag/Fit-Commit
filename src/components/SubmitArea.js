import { useState } from 'react'
import './SubmitArea.css'
import SubmitBox from './SubmitBox'

const SubmitArea = () => {
    
    const [active, setActive] = useState(['none', '+'])
    
    const switchActive = () => {
        if (active[0] == 'none')
            return setActive(['block','-'])
        setActive(['none', '+'])
    }

    return (
        <div>
            <div className="submit-area" onClick={() => switchActive()}>
                <div></div>
                <div>Add Workout</div>
                <div>{active[1]} </div>
            </div>
            <SubmitBox isActive={active} />
        </div>    
    )
}
export default SubmitArea