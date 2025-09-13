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

  //This function updates the width and height variable that I use based on the screen sizes
  //I send it to all the components that use other component that need to figure out theyre
  //height and width.
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

          {/* Row 1, Column 1 */}
          <div className="bundle column-1" style={{ gridRow: "1", gridColumn: "1" }}>
            <ChooseApplication id="choose-application" />
            <HODSystem id="hod-system" width={size.width} height={size.height} />
          </div>

          {/* Row 1, Column 2 */}
          <Specifications
            id="specifications"
            width={size.width}
            height={size.height}
            className="column-2"
            style={{ gridRow: "1", gridColumn: "2" }}
          />

          {/* Row 1, Column 3 */}
          <PathogenReduction
            id="Pathogen-reduction"
            openFullTable={() => setFullTableOpened(true)}
            width={size.width}
            height={size.height}
            className="column-3"
            style={{ gridRow: "1", gridColumn: "3" }}
          />

          {/* Row 2, Column 1 */}
          <div className="bundle column-1" style={{ gridRow: "2", gridColumn: "1" }}>
            <CalculatrVersion id="calculator-version" />
            <PlotFigures id="plot-figures" />
          </div>

          {/* Row 2, Column 2 */}
          <Results
            id="results"
            width={size.width}
            height={size.height}
            className="column-2"
            style={{ gridRow: "2", gridColumn: "2" }}
          />

          {/* Row 2, Column 3 */}
          <div className="bundle column-3" style={{ gridRow: "2", gridColumn: "3" }}>
            <PathogenInactivation
              id="pathogen-inactivation"
              width={size.width}
              height={size.height}
            />
            <Dichlorination id="dichlorination" />
          </div>

        {fullTableOpened && (
          <DraggableWindow
            height={size.height * 0.6}
            width={size.width * 0.65}
            content={
              <div>
                <div
                  className="app-view-header"
                  style={{
                    gridTemplateColumns: `1.5fr repeat(10, 1fr) ` // pathogen + 10 logs + last column
                  }}
                >
                  <div className="app-pathogen-type-header">Pathogen Type</div>
                  {Array.from({ length: 10 }, (_, i) => (
                    <div key={i} className="app-log-header">
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
