
import './App.css';
import Header from './components/Header';
import MainArea from './components/MainArea';
import FitnessData from './components/FitnessData'

import { createContext, useContext, useState } from 'react';


function App() {

  let date1 = new Date(2023, 5, 4);
  let date2 = new Date(2023, 5, 3);
  let date3 = new Date(2023, 5, 1);
  const [fitData, setFitData] = useState([{
    time: date1.toString(),
    category: 'abs',
    muscles:['lower abs'],
    title: 'crunches',
    duration: 27,
    notes:'basic crunches'
  },
  {
    time: date2.toString(),
    category: 'upper arms',
    muscles:['biceps'],
    title: 'very long title this is a long title this is to test long titles',
    duration: 327,
    notes: 'idk'
    },
    {
      time: date3.toString(),
      category: 'upper legs',
      muscles:['thigh'],
      title: 'regular title',
      duration: 127,
      notes: 'idk'
    }])
  
  function datediff(first, second) {        
    return Math.round((second - first) / (1000 * 60 * 60 * 24))-1;
  }


  return (

    <FitnessData.Provider value={{ fitData, setFitData, datediff }}>
      <div className="App">
        <Header />
        <MainArea/>
      </div>
    </FitnessData.Provider>
  );
}

export default App;
