
import './App.css';
import Header from './components/Header';
import MainArea from './components/MainArea';
import FitnessData from './components/FitnessData'

import { createContext, useContext, useEffect, useState } from 'react';


function App() {

  if (!localStorage.getItem('workouts'))
    localStorage.setItem('workouts', JSON.stringify([]))

  const [bodySelection, setBodyPart] = useState('')
  let workouts = JSON.parse(localStorage.getItem('workouts'))
  if (!workouts)
    workouts = []
  const [fitData, setFitData] = useState(
    [
      {
      category: 'cardio',
      duration: 20,
      muscles: [],
      notes:'',
      time: 1686715200000,
      title:'running'
      },
      {
        category: 'abs',
        duration: 46,
        muscles: [],
        notes:'',
        time: 1686628800000,
        title:'Ab workouts'
      },
      {
        category: 'cardio',
        duration: 46,
        muscles: [],
        notes:'',
        time: 1686456000000,
        title:'marathon'
        },
    ]
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
