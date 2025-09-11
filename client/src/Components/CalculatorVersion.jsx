import { useState, useEffect, Fragment} from 'react'
import '../Styles/CalculatorVersion.css';
import data from "../data";

function CalculatorVersion () {

  const [pressedButton, setPressedButton] = useState(null);

    const handleClick = (button) => {
    setPressedButton(button);
  }
   

  return ( <div className="CalculatorVersion">
    <div className="title-box">
            <p>Calculator Version</p>
    </div>
    <div className="wrapper">
        <div className='horizontal-container'>
                {data.CalculatorVersionButtons.map((button, index) => (
                    <div className='button' key={index} onClick={() => handleClick(button)}>
                            <p>{button}</p>
                    </div>
                ))}
            </div>
    </div>
    
    </div>
  
  )}

export default CalculatorVersion;