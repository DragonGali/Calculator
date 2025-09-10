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
import FullTable from './Components/FullTable.jsx'

import data from "./data.js"
import TableView from './Components/TableView.jsx'

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

  const [fullTableOpened, setFullTableOpened] = useState(false);

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
        <PathogenReduction id="Pathogens-reduction" openFullTable={() => setFullTableOpened(true)}/>
        <PathogenInactivation id="pathogen-inactivation"/>
        <Dichlorination id="dichlorination"/>
        <FullTable content={<TableView data={data.PathogenReduction.tableView.tableData} />} />
      </div>
    </div>
  </div>  
  )
}

export default App
