import { useState, useEffect, Fragment} from 'react'
import '../Styles/PathogenInactivation.css';
import data from "../data";

import InputField from './InputField';
import ProgressBar from './ProgressBar.jsx'

function PathogenInactivation ({width, height}) {

  const [pressedButton, setPressedButton] = useState(null);
  const [expectedLI, setExepectedLI] = useState(3);

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
            <div className='type-box' >
                <p>Selected</p>
            </div>
            <div className='value-box' style={{width: Math.max(100, Math.min(width * 0.115, 200))}}>
              <p>Manul Input</p>
            </div>
          </div>

          <div className="horizontal-container">
            <div className='type-box'>
                <p>D-1LOG UV-</p>
            </div>

            <input
             type="text"
             className='simple-input'
             placeholder='' value="3"
             />

            <div className='type-box' style={{ width: Math.max(25, Math.min(width * 0.04, 200)) }}>
                <p>[mJ]</p>
            </div>
          </div>

          <div className='horizontal-container'>
              <div className='type-box'>
                  <p>Expected LI</p>
              </div>
              <div className='value-box' style={{ width: Math.max(70, Math.min(width * 0.07, 200)) }}>
                <p>{expectedLI}</p>
              </div>
              <ProgressBar width={Math.max(26, Math.min(width * 0.04, 80))} height={Math.max(19, Math.min(height * 0.03, 50))} progress={expectedLI} maxProgress={5}/>
          </div>
      </div>
      <div className='vertical-container'>
        <div className='reset-button'>
          <p>Reset</p>
        </div>
        <p className='expected-li-text'>{`${expectedLI} out of 5LOG`}</p>
      </div>
      </div>
    </div>
  
  )}

export default PathogenInactivation;