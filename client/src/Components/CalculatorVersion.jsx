import { useState, useEffect, Fragment} from 'react'
import '../Styles/CalculatorVersion.css';
import data from "../data";

import PasswordBox from './PasswordBox';

const CalculatorVersion = ({unlockAll, openPasswordBox}) => {
  
  useEffect(() => {
    console.log(unlockAll);
  }, [unlockAll])

  const handleClick = (button) => {
    if (button === data.CalculatorVersionButtons[0]) { 
      openPasswordBox();
    } 
    else if (button === data.CalculatorVersionButtons[1]) { 
      unlockAll(false);
    }
  };
   

  return ( <div className="CalculatorVersion">
    <div className="title-box">
            <p>Calculator Version</p>
    </div>
    <div className="wrapper">
        <div className='horizontal-container'>
                {data.CalculatorVersionButtons.map((button, index) => (
                    <div className='button' key={index} onClick={() => {handleClick(button)}}>
                            <p>{button}</p>
                    </div>
                ))}
            </div>
    </div>
    
    </div>
  
  )}

export default CalculatorVersion;