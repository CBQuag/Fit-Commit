import './BodyHeatmap.css'
import '../body-mask.png'

const BodyHeatmap =() => {
    
    return (
        <div className='body-heatmap'>
            {/* <img className='body-mask' src={require('../body-mask.png')} alt="body-mask" srcset="" /> */}
            <div className="body-part head"></div>
            <div className="body-part chest"></div>
            <div className="body-part heart"></div>
            <div className="body-part upper-arm-l"></div>
            <div className="body-part upper-arm-r"></div>
            <div className="body-part forearm-l"></div>
            <div className="body-part forearm-r"></div>
            <div className="body-part abs"></div>
            <div className="body-part upper-leg-l"></div>
            <div className="body-part upper-leg-r"></div>
            <div className="body-part lower-leg-l"></div>
            <div className="body-part lower-leg-r"></div>
        </div>
    )
}

export default BodyHeatmap