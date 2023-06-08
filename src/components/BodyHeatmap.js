import './BodyHeatmap.css'
import '../body-mask.png'
import FitnessData from './FitnessData'
import { useContext, useEffect, useState } from 'react'

const BodyHeatmap = () => {
    
    const { fitData, selectForInfo, bodySelection } = useContext(FitnessData)
    const [bodyData, setBodyData] = useState([])
    const [intensity, setIntensity] = useState(1)

    useEffect(() => {
        if (!fitData[0])
            return;
        setBodyData(fitData)
        setIntensityByMinutes(180)
    }, [fitData])

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
                case 'cardio':
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

    const displayscale = part => {
        if (bodySelection == part)
            return `1.05`
        return '1'
    }

    const displayOutline = part => {
        if (bodySelection == part)
            return '2px solid rgb(0, 104, 195)'
        return 'none'
    }

    const displayOnTop = part => {
        if (bodySelection == part)
            return 98
    }
    
    return (
        <div className='body-heatmap'>
            <div style={{
                backgroundColor: convertToHeat(bodyParts.head),
                scale: displayscale('head'),
                outline: displayOutline('head'),
                zIndex: displayOnTop('head')
            }}
                className="body-part head"
                onClick={()=>selectForInfo('head')}></div>
            <div style={{
                backgroundColor: convertToHeat(bodyParts.chest),
                scale: displayscale('chest'),
                outline:displayOutline('chest'),
                zIndex: displayOnTop('chest')
            }}
                className="body-part chest"
                onClick={()=>selectForInfo('chest')}></div>
            <div style={{
                backgroundColor: convertToHeat(bodyParts.heart),
                scale: displayscale('heart'),
                border:bodySelection=='heart'?'2px solid rgb(0, 104, 195)':'2px solid black',
                zIndex: 99
            }}
                className="body-part heart"
                onClick={()=>selectForInfo('heart')}></div>
            <div style={{
                backgroundColor: convertToHeat(bodyParts.upperArms),
                scale: displayscale('upper arms'),
                outline:displayOutline('upper arms'),
                zIndex: displayOnTop('upper arms')
            }}
                className="body-part upper-arm-l"
                onClick={()=>selectForInfo('upper arms')}></div>
            <div style={{
                backgroundColor: convertToHeat(bodyParts.upperArms),
                scale: displayscale('upper arms'),
                outline:displayOutline('upper arms'),
                zIndex: displayOnTop('upper arms')
            }}
                className="body-part upper-arm-r"
                onClick={()=>selectForInfo('upper arms')}></div>
            <div style={{
                backgroundColor: convertToHeat(bodyParts.forearms),
                scale: displayscale('forearms'),
                outline:displayOutline('forearms'),
                zIndex: displayOnTop('forearms')
            }}
                className="body-part forearm-l"
                onClick={()=>selectForInfo('forearms')}></div>
            <div style={{
                backgroundColor: convertToHeat(bodyParts.forearms),
                scale: displayscale('forearms'),
                outline:displayOutline('forearms'),
                zIndex: displayOnTop('forearms')
            }}
                className="body-part forearm-r"
                onClick={()=>selectForInfo('forearms')}></div>
            <div style={{
                backgroundColor: convertToHeat(bodyParts.abs),
                scale: displayscale('abs'),
                outline:displayOutline('abs'),
                zIndex: displayOnTop('abs')
            }}
                className="body-part abs"
                onClick={()=>selectForInfo('abs')}></div>
            <div style={{
                backgroundColor: convertToHeat(bodyParts.upperLegs),
                scale: displayscale('upper legs'),
                outline:displayOutline('upper legs'),
                zIndex: displayOnTop('upper legs')
            }}
                className="body-part upper-leg-l"
                onClick={()=>selectForInfo('upper legs')}></div>
            <div style={{
                backgroundColor: convertToHeat(bodyParts.upperLegs),
                scale: displayscale('upper legs'),
                outline: displayOutline('upper legs'),
                zIndex: displayOnTop('upper legs')
            }}
                className="body-part upper-leg-r"
                onClick={()=>selectForInfo('upper legs')}></div>
            <div style={{
                backgroundColor: convertToHeat(bodyParts.lowerLegs),
                scale: displayscale('lower legs'),
                outline:displayOutline('lower legs'),
                zIndex: displayOnTop('lower legs')
            }}
                className="body-part lower-leg-l"
                onClick={()=>selectForInfo('lower legs')}></div>
            <div style={{
                backgroundColor: convertToHeat(bodyParts.lowerLegs),
                scale: displayscale('lower legs'),
                outline: displayOutline('lower legs'),
                zIndex: displayOnTop('lower legs')
            }}
                className="body-part lower-leg-r"
                onClick={() => selectForInfo('lower legs')}></div>
            
            <div className='bg'
                onClick={() => selectForInfo('')}></div>
        </div>
    )
}

export default BodyHeatmap