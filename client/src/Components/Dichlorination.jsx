import { useState, useEffect, Fragment} from 'react'
import '../Styles/Dichlorination.css';
import data from "../data";

function Dichlorination () {

  const [pressedButton, setPressedButton] = useState(null);

    const handleClick = (button) => {
    setPressedButton(button);
  }
   

  return ( <div className="Dichlorination">
    <div className="title-box">
            <p>Dichlorination and Ozone decomposition</p>
    </div>
    <div className="wrapper">
    </div>
    
    </div>
  
  )}

export default Dichlorination;