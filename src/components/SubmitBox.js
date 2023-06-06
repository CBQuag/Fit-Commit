import { useState } from 'react'
import './SubmitBox.css'

const SubmitBox = (props) => {

    const [details, setDetailsActive] = useState(['none','More'])
    
    const handleChange = (text) => {
        
    }

    const switchActive = () => {
        if (details[0] == 'none')
            return setDetailsActive(['block', 'Less'])
        setDetailsActive(['none', 'More'])
    }
    
    return (
        <div className='submit-box' style={{ display: props.isActive[0] }}>
            <div className='category-name'>
                <select name="Categories" id="categories">
                    <option value="heart">Cardio</option>
                    <option value="chest">Chest</option>
                    <option value="upperArms">upper arms</option>
                    <option value="lowerArms">lower arms</option>
                    <option value="abs">abs</option>
                    <option value="upperLegs">upper legs</option>
                    <option value="lowerLegs">lower legs</option>
                </select>
                <input className='name-input' type="text" placeholder='Input Name'/>
            </div>
            <div className='time-display'>
                Duration 
                <div className='inner-time-display'>
                    <input className='time' type="text" placeholder='00' />:
                    <input className='time' type="text" placeholder='00' />
                </div>
            </div>
            <div className='details-submit'>
                <button className='detail-button' onClick={()=>{switchActive()}}>{details[1]} details</button>
                <div className='details' style={{ display: details[0] }}>
                    <div>
                        <input className='muscles' type="text" placeholder='muscles' />
                    </div>
                    <textarea className='notes' type="text" placeholder='Additional notes'/>
                </div>
                <button className='submit'>submit</button>
            </div>
            
        </div>
    )
}

export default SubmitBox