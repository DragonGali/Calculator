import { useState, useEffect } from 'react'
import ChooseApplication from './Components/ChooseApplication.jsx'
import HODSystem from './Components/HODSystem.jsx'
import './App.css'

// const URL = 'https://dummyjson.com/test';

function App() {

  // useEffect(()=>{

  //   const fun  = async () => {
  //     let data = await fetch(URL);
  //     data.json().then((json) => {
  //       console.log(json);
  //     })
  //   }

  //   fun();
      
  // }, [])


  return ( <div className="App">
    <div id="flex-container">
      {/* <div id="atlantium-logo"></div> */}
      <img id="atlantium-img" src="/AtlantiumLogo_Long.png"/>
      <div className="systems-container">
        <ChooseApplication id="choose-application"/>
        <HODSystem id="hod-system"/>
      </div>
    </div>
  </div>
  )
}

export default App
