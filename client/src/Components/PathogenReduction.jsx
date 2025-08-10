import { useState, useEffect, Fragment} from 'react'
import '../Styles/PathogenReduction.css';
import data from "../data";

function PathogenReduction () {

  const [pressedButton, setPressedButton] = useState(null);

    const handleClick = (button) => {
    setPressedButton(button);
  }
   

  return ( <div className="PathogenReduction">
    <div className="title-box">
            <p>Pathogens - Log Reduction Dosage [mJ/cm²]</p>
    </div>
    <div className="wrapper">
      <div className='vertical-container'>
          <div className='container'>
        
          </div>
      </div>
    </div>
    </div>
  
  )}

export default PathogenReduction;