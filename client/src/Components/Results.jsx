import { useState, useEffect, Fragment} from 'react'
import '../Styles/Results.css';
import data from "../data";

function Results () {

  const [pressedButton, setPressedButton] = useState(null);

    const handleClick = (button) => {
    setPressedButton(button);
  }
   

  return ( <div className="Results">
    <div className="title-box">
            <p>Plot Figures</p>
    </div>
    <div className="wrapper">
    </div>
    
    </div>
  
  )}

export default Results;