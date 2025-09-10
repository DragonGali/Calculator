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
import FullTable from './Components/DraggableWindow.jsx'

import data from "./data.js"
import TableView from './Components/TableView.jsx'
import DraggableWindow from './Components/DraggableWindow.jsx'

// const URL = 'https://dummyjson.com/test';

const App = () =>  {

  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
        <PathogenReduction id="Pathogens-reduction" openFullTable={() => {setFullTableOpened(true)}}/>
        <PathogenInactivation id="pathogen-inactivation"/>
        <Dichlorination id="dichlorination"/>
        {fullTableOpened && (
          <DraggableWindow
            height={size.height * 0.6}
            width={size.width * 0.6}
            content={
              <div>
                <div
                  className="view-header"
                  style={{
                    gridTemplateColumns: `3fr repeat(10, 1fr) 0.6fr` // pathogen + 10 logs + last column
                  }}
                >
                  <div className="pathogen-type-header">Pathogen Type</div>
                  {Array.from({ length: 10 }, (_, i) => (
                    <div key={i} className="log-header">
                      {`${1 + i * 0.5}-Log`}
                    </div>
                  ))}
                </div>

                <TableView data={data.PathogenReduction.FullTable.tableData} />
              </div>
            }
            title={data.PathogenReduction.FullTable.title}
            onClose={() => setFullTableOpened(false)}
          />
      )}
    </div>
  </div>
  </div>
)}

export default App
