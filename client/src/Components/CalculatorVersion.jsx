import { useState, useEffect, Fragment} from 'react'
import '../Styles/CalculatorVersion.css';
import data from "../data";

import PasswordBox from './PasswordBox';

const CalculatorVersion = ({unlockAll}) => {

  const [pressedButton, setPressedButton] = useState(null);
  const [openPasswordBox, setOpenPasswordBox] = useState(false)

  useEffect(() => {
    console.log(unlockAll);
  }, [unlockAll])

  const handleClick = (button) => {
    setPressedButton(button);
  }

  useEffect(() => {
    if(pressedButton === data.CalculatorVersionButtons[0]) { //If the button pressed is 'Developer' the passwordBox will open.
      setOpenPasswordBox(true);
    }

    else if(pressedButton === data.CalculatorVersionButtons[1]) {//Setting things back to hidden if you press the 'Marketing' button.
      unlockAll(false)
    }
  }, [pressedButton])
   

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
    {openPasswordBox && <PasswordBox onClose={() => {setOpenPasswordBox(false); setPressedButton(null)}} onPasswordCorrect={() =>{unlockAll(true)}}></PasswordBox>}
    
    </div>
  
  )}

export default CalculatorVersion;