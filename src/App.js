
import './App.css';
import Header from './components/Header';
import MainArea from './components/MainArea';
import FitnessData from './components/FitnessData'

import { createContext, useContext, useEffect, useState } from 'react';


function App() {

  if (!localStorage.getItem('workouts'))
    localStorage.setItem('workouts', JSON.stringify([]))

  let date1 = new Date(2023, 5, 4);
  let date2 = new Date(2023, 5, 3);
  let date3 = new Date(2023, 5, 1);
  const [bodySelection, setBodyPart] = useState('')
  let workouts = JSON.parse(localStorage.getItem('workouts'))
  if (!workouts)
    workouts = []
  const [fitData, setFitData] = useState(
    workouts
  )
  
  function datediff(first, second) {
    let fDate=new Date(first)
    console.log(fDate.getDate())
    return Math.round((second - first) / (1000 * 60 * 60 * 24));
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
