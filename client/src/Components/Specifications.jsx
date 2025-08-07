import { useState, useEffect, Fragment} from 'react'
import '../Styles/Specifications.css';
import data from "../data";

function Specifications () {

  const [pressedButton, setPressedButton] = useState(null);

    const handleClick = (button) => {
    setPressedButton(button);
  }
   

  return ( <div className="Specifications">
    <div className="title-box">
            <p>Specifications</p>
    </div>
    <div className="wrapper">
        <div className="vertical-container">
                <div className="horizontal-container">
                    <div className="type-box">
                        <p>Lamp Effiecency:</p>
                    </div>
                </div>
        <div/>
    </div>
    </div>
    </div>
  
  )}

export default Specifications;