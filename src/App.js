import { useState, createContext } from 'react';
import './App.css';
import CpOne from './component/CpOne';

export const Sar = createContext();

function App() {
  const [data,setData]= useState({
    name:'lmo',
    age:21,
    gender:'male',
    school:'Yadanarbon Uni'
  })
  return (<Sar.Provider value={{data}} >
      <CpOne/>
  </Sar.Provider>
    
  );
}

export default App;
