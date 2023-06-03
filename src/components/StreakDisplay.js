import './StreakDisplay.css'

const StreakDisplay = () => {
    
    return (
        <div className='streak-box'>
            <img className='streak-off' src={require('../streak-off.png')} alt="" />
            <img className='streak-on' src={require('../streak-on.png')} alt="" /> <h3>0</h3>
        </div>
    )
}

export default StreakDisplay