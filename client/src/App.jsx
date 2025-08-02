import { useState, useEffect } from 'react'
import ChooseAplication from './Components/ChooseApplication';'./Components/ChooseApplication.jsx'
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
      <ChooseAplication id="choose-application"/>
    </div>
  </div>
  )
}

export default App
