import { useState, useEffect, Fragment} from 'react'
import '../Styles/PlotFigures.css';
import data from "../data";

function PlotFigures ({unlockAll}) {

  const [pressedButton, setPressedButton] = useState(null);

    const handleClick = (button) => {
    setPressedButton(button);
  }
   

  return ( <div className={`PlotFigures ${unlockAll ? '' : ''}`}>
    <div className="title-box">
            <p>Plot Figures</p>
    </div>
    <div className="wrapper">
        {/* <div className='vertical-container'>
                {data.PlotFiguresButtons.map((button, index) => (
                    <div className='button' key={index} onClick={() => handleClick(button)}>
                            <p>{button}</p>
                    </div>
                ))}
            </div> */}
    </div>
    
    </div>
  
  )}

export default PlotFigures;