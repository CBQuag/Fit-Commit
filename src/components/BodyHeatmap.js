import './BodyHeatmap.css'
import '../body-mask.png'
import FitnessData from './FitnessData'
import { useContext, useEffect, useState } from 'react'

const BodyHeatmap = () => {
    
    const { fitData } = useContext(FitnessData)
    const [bodyData, setBodyData] = useState([])
    
    useEffect(() => {
        if (!fitData[0])
            return;
        setBodyData(fitData)
    },[])

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

    const intensity = 1 / 2;

    const convertToHeat = (level, modifier) => {
        let rgbValue=128+level*intensity*(modifier?modifier:1)
        return `rgb(${rgbValue},${rgbValue},${rgbValue})`
    }


    const headHeat = {
        backgroundColor:convertToHeat(bodyParts.head)
    }
    const chestHeat = {
        backgroundColor:convertToHeat(bodyParts.chest)
    }
    const heartHeat = {
        backgroundColor:convertToHeat(bodyParts.heart)
    }
    const upperArmHeat = {
        backgroundColor:convertToHeat(bodyParts.upperArms)
    }
    const forearmsHeat = {
        backgroundColor:convertToHeat(bodyParts.forearms)
    }
    const absHeat = {
        backgroundColor:convertToHeat(bodyParts.abs)
    }
    const upperLegHeat = {
        backgroundColor:convertToHeat(bodyParts.upperLegs)
    }
    const lowerLegHeat = {
        backgroundColor:convertToHeat(bodyParts.lowerLegs)
    }
    
    return (
        <div className='body-heatmap'>
            <div style={headHeat} className="body-part head"></div>
            <div style={chestHeat} className="body-part chest"></div>
            <div style={heartHeat} className="body-part heart"></div>
            <div style={upperArmHeat} className="body-part upper-arm-l"></div>
            <div style={upperArmHeat} className="body-part upper-arm-r"></div>
            <div style={forearmsHeat} className="body-part forearm-l"></div>
            <div style={forearmsHeat} className="body-part forearm-r"></div>
            <div style={absHeat} className="body-part abs"></div>
            <div style={upperLegHeat} className="body-part upper-leg-l"></div>
            <div style={upperLegHeat} className="body-part upper-leg-r"></div>
            <div style={lowerLegHeat} className="body-part lower-leg-l"></div>
            <div style={lowerLegHeat} className="body-part lower-leg-r"></div>
        </div>
    )
}

export default BodyHeatmap