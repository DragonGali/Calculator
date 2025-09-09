import { useState, useEffect, Fragment} from 'react'
import '../Styles/PathogenInactivation.css';
import data from "../data";

function PathogenInactivation () {

  const [pressedButton, setPressedButton] = useState(null);

    const handleClick = (button) => {
    setPressedButton(button);
  }
   

  return ( <div className="PathogenInactivation">
    <div className="title-box">
            <p>Pathogen-Specific Log-Inactivation</p>
    </div>
    <div className="wrapper">
      <div className="vertical-container">
        <div className="horizontal-container">
          <div className='type-box'>
              <p>Selected</p>
          </div>
          <div className='value-box'>
            <p>Manul Input</p>
          </div>
        </div>
      </div>
    </div>
    
    </div>
  
  )}

export default PathogenInactivation;