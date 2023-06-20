
import './App.css';
import Header from './components/Header';
import MainArea from './components/MainArea';
import FitnessData from './components/FitnessData'

import { createContext, useContext, useEffect, useState } from 'react';


function App() {

  const getDaysBefore = days => {
    let ObjDate = new Date(Date.now())
    let clearDate=new Date(ObjDate.getFullYear(), ObjDate.getMonth(), ObjDate.getDate())
    return ObjDate-(days*(1000*60*60*24))
  }

  const workoutData = [
    {
      category: 'chest',
      duration: 7,
      muscles: [],
      notes: '',
      time: getDaysBefore(1),
      title: 'push ups'
    },
    {
    category: 'upper arms',
    duration: 20,
    muscles: [],
    notes:'',
    time: getDaysBefore(2),
    title:'bicep curls'
    },
    {
      category: 'abs',
      duration: 46,
      muscles: [],
      notes:'',
      time: getDaysBefore(4),
      title:'Ab workouts'
    },
    {
      category: 'cardio',
      duration: 46,
      muscles: [],
      notes:'',
      time: getDaysBefore(5),
      title:'marathon'
    },
    
  ]

  if (!localStorage.getItem('workouts'))
    localStorage.setItem('workouts', JSON.stringify(workoutData))

  const [bodySelection, setBodyPart] = useState('')
  let workouts = JSON.parse(localStorage.getItem('workouts'))
  if (!workouts)
    workouts = []
  const [fitData, setFitData] = useState(
    workoutData
  )
  
  function datediff(first, second) {
    let fDate = new Date(first) 
    let sDate = new Date(second)
    let cleanFDate = new Date(fDate.getFullYear(), fDate.getMonth(), fDate.getDate())
    let cleanSDate=new Date(sDate.getFullYear(), sDate.getMonth(), sDate.getDate())
    return Math.round((cleanSDate.getTime() - cleanFDate.getTime()) / (1000 * 60 * 60 * 24) );
  }

  function selectForInfo(info) {
    if (info == bodySelection)
      return setBodyPart('')
    setBodyPart(info)
  }

  return (

    <FitnessData.Provider value={{ fitData, setFitData, datediff, selectForInfo, bodySelection}}>
      <div className="App">
        <Header />
        <MainArea/>
      </div>
    </FitnessData.Provider>
  );
}

export default App;
