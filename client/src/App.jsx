import { useState, useEffect } from 'react'
import ChooseApplication from './Components/ChooseApplication.jsx'
import HODSystem from './Components/HODSystem.jsx'
import CalculatrVersion from './Components/CalculatorVersion.jsx'
import PlotFigures from './Components/PlotFigures.jsx'
import Specifications from './Components/Specifications.jsx'
import Results from './Components/Results.jsx'
import PathogenReduction from './Components/PathogenReduction.jsx'
import PathogenInactivation from './Components/PathogenInactivation.jsx'
import Dichlorination from './Components/Dichlorination.jsx'
import './App.css'

// const URL = 'https://dummyjson.com/test';

function App() {

//Code ill later on use to fetch the RESTAPI


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
      <img id="atlantium-img" src="/AtlantiumLogo_Long.png"/>
      <div className="systems-container">
        <ChooseApplication id="choose-application"/>
        <HODSystem id="hod-system"/>
        <CalculatrVersion id="calculator-version"/>
        <PlotFigures id="plot-figures"/>
        <Specifications id="specifications"/>
        <Results id="results"/>
        <PathogenReduction id="Pathogens-reduction"/>
        <PathogenInactivation id="pathogen-inactivation"/>
        <Dichlorination id="dichlorination"/>
      </div>
    </div>
  </div>
  )
}

export default App
