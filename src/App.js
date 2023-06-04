
import './App.css';
import Header from './components/Header';
import MainArea from './components/MainArea';
import FitnessData from './components/FitnessData'

import { createContext, useContext, useState } from 'react';


function App() {

  let date1 = new Date(2023, 5, 4);
  let date2 = new Date(2023, 5, 3);
  const [fitData, setFitData] = useState([{
    time: date1.toString(),
    category: 'abs',
    title: 'crunches',
    duration: 27,
    notes:'basic crunches'
  },
  {time: date2.toString(),
  category: 'upper arms',
  title: 'very long title this is a long title this is to test long titles',
  duration: 327,
  notes:'basic crunches'}])


  return (

    <FitnessData.Provider value={{ fitData, setFitData }}>
      <div className="App">
        <Header />
        <MainArea/>
      </div>
    </FitnessData.Provider>
  );
}

export default App;
