import { useContext, useEffect, useState } from 'react'
import './SubmitBox.css'
import FitnessData from './FitnessData'

const SubmitBox = (props) => {

    const { setFitData } = useContext(FitnessData)

    const [details, setDetailsActive] = useState(['none', 'More'])
    const [categories, setCategoriesOpen] = useState(['none', '+'])
    const [category, setCategory] = useState('')
    const [name, setName] = useState('')
    const [hours, setHours] = useState('')
    const [minutes, setMinutes] = useState('')

    const [muscles, setMuscles] = useState([])
    const [notes, setNotes] = useState('')

    const [workout, setWorkout] = useState({})
    const [err, setError]=useState('')
    
    const switchActive = () => {
        if (details[0] == 'none')
            return setDetailsActive(['block', 'Less'])     
        setDetailsActive(['none', 'More'])
    }

    const openCategories = () => {
        if (categories[0] == 'none')
            return setCategoriesOpen(['block', '-'])
        setCategoriesOpen(['none', '+'])
    }

    const handleCategory = choice => {
        setCategory(choice)
        setCategoriesOpen(['none', '+'])
    }

    const handleSubmit = () => {
        if ((!hours && !minutes)||!name||!category)
            return setError('missing fields!')
        setError('')
        let convertHours = hours ? (parseInt(hours) * 60) : 0
        let convertMinutes = minutes ? parseInt(minutes) : 0
        let convertDuration = convertHours + convertMinutes
        
        let workout={
            time: Date.now(),
            category: category,
            title: name,
            duration: convertDuration,
            muscles: muscles,
            notes: notes
        }
        
        let workouts = JSON.parse(localStorage.getItem('workouts'))
        workouts.push(workout)
        localStorage.setItem('workouts', JSON.stringify(workouts))
        setFitData(workouts)
        clearInput()
    }
    
    const clearInput = () => {
        setCategory('');
        setName('')
        setHours('')
        setMinutes('')
        setMuscles([])
        setNotes('')
        setError('')
    }

    useEffect(() => {
        setCategoriesOpen(['none', '+']);
        clearInput()
    },[props.isActive])

    return (
        <div className='submit-box' style={{ display: props.isActive[0] }}>
            <div className='category-name'>
                <div>
                    <div className='dropdown-text'>
                        <input className='dropdown-text-box'
                            onClick={() => openCategories()}
                            type="text"
                            readOnly
                            placeholder='Category'
                            value={category}
                            style={{ borderBottomLeftRadius: categories[0] == 'block' ? '0px' : '10px' }}   
                        />
                        <button className='open-categories' onClick={() => openCategories()}>{categories[1]}</button>
                    </div>
                    <div className='droptions' style={{display:categories[0]}}>
                        <div className='droption' onClick={()=>handleCategory('cardio')}>Cardio</div>
                        <div className='droption' onClick={()=>handleCategory('chest')}>Chest</div>
                        <div className='droption' onClick={()=>handleCategory('upper arms')}>upper arms</div>
                        <div className='droption' onClick={()=>handleCategory('lower arms')}>lower arms</div>
                        <div className='droption' onClick={()=>handleCategory('abs')}>abs</div>
                        <div className='droption' onClick={()=>handleCategory('upper legs')}>upper legs</div>
                        <div className='droption final-drop' onClick={()=>handleCategory('lower legs')}>lower legs</div>
                    </div>
                </div>
                <input className='name-input'
                    type="text"
                    placeholder='Input Name'
                    value={name}
                    onInput={e=>setName(e.target.value)} 
                />
            </div>
            <div className='time-display'>
                Duration 
                <div className='inner-time-display'>
                    <input className='time'
                        type="number"
                        placeholder='00'
                        value={hours}
                        onInput={e=>setHours(e.target.value)}
                    />:
                    <input className='time'
                        type="number"
                        placeholder='00'
                        value={minutes}
                        onInput={e=>setMinutes(e.target.value)}
                    />
                </div>
            </div>
            <div className='details-submit'>
                <button className='detail-button' onClick={() => { switchActive()}}>{details[1]} details</button>
                <div className='details' style={{ display: details[0] }}>
                    <div>
                        <input className='muscles'
                            type="text"
                            placeholder='muscles'
                            value={muscles}
                            onInput={e => setMuscles(e.target.value.split(','))}
                        />
                    </div>
                    <textarea className='notes'
                        type="text"
                        placeholder='Additional notes'
                        value={notes}
                        onInput={e=>setNotes(e.target.value)}
                    />
                </div>
                <button className='submit' onClick={()=>handleSubmit()}>submit</button>
            </div>
            <div className='error-box'>
                {err}
            </div>
        </div>
    )
}

export default SubmitBox