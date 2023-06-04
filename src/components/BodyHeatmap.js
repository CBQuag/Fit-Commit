import './BodyHeatmap.css'
import '../body-mask.png'
import FitnessData from './FitnessData'
import { useContext, useEffect, useState } from 'react'

const BodyHeatmap = () => {
    
    const { fitData } = useContext(FitnessData)
    const [bodyData, setBodyData] = useState([])
    const [intensity, setIntensity] = useState(1)

    useEffect(() => {
        if (!fitData[0])
            return;
        setBodyData(fitData)
        setIntensityByMinutes(180)
    }, [])

    let bodyParts = {
        head: 0,
        chest: 0,
        heart: 0,
        upperArms: 0,
        forearms: 0,
        abs: 0,
        upperLegs: 0,
        lowerLegs: 0
    };

    const setIntensityByMinutes = minutes => {
        let intensityValue = 128/minutes;
        setIntensity(intensityValue)
    }
    

    const setBodyHeat = data => {
        data.forEach(log => {
            switch (log.category) {
                case 'chest':
                    bodyParts.chest+=log.duration;
                    break;
                case 'heart':
                    bodyParts.heart += log.duration;
                    break;
                case 'upper arms':
                    bodyParts.upperArms+=log.duration;
                    break;
                case 'forearms':
                    bodyParts.forearms+=log.duration;
                    break;
                case 'abs':
                    bodyParts.abs+=log.duration;
                    break;
                case 'upper legs':
                    bodyParts.upperLegs+=log.duration;
                    break;
                case 'lower legs':
                    bodyParts.lowerLegs+=log.duration;
                    break;
                default:
                    break;
            }
        });
    }
    setBodyHeat(bodyData)

    const convertToHeat = (level, modifier) => {
        let rgbValue=128+level*intensity*(modifier?modifier:1)
        return `rgb(${rgbValue},${rgbValue},${rgbValue})`
    }
    
    return (
        <div className='body-heatmap'>
            <div style={{backgroundColor:convertToHeat(bodyParts.head)}}        className="body-part head"></div>
            <div style={{backgroundColor:convertToHeat(bodyParts.chest)}}       className="body-part chest"></div>
            <div style={{backgroundColor:convertToHeat(bodyParts.heart)}}       className="body-part heart"></div>
            <div style={{backgroundColor:convertToHeat(bodyParts.upperArms)}}   className="body-part upper-arm-l"></div>
            <div style={{backgroundColor:convertToHeat(bodyParts.upperArms)}}   className="body-part upper-arm-r"></div>
            <div style={{backgroundColor:convertToHeat(bodyParts.forearms)}}    className="body-part forearm-l"></div>
            <div style={{backgroundColor:convertToHeat(bodyParts.forearms)}}    className="body-part forearm-r"></div>
            <div style={{backgroundColor:convertToHeat(bodyParts.abs)}}         className="body-part abs"></div>
            <div style={{backgroundColor:convertToHeat(bodyParts.upperLegs)}}   className="body-part upper-leg-l"></div>
            <div style={{backgroundColor:convertToHeat(bodyParts.upperLegs)}}   className="body-part upper-leg-r"></div>
            <div style={{backgroundColor:convertToHeat(bodyParts.lowerLegs)}}   className="body-part lower-leg-l"></div>
            <div style={{backgroundColor:convertToHeat(bodyParts.lowerLegs)}}   className="body-part lower-leg-r"></div>
        </div>
    )
}

export default BodyHeatmap