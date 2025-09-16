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
        <div className="vertical-container">
          <div className='horizontal-container'>
              <div className='type-box'>
                <p>Ozone-In</p>
              </div>
              
              <div className='value-box disabled'>
                  <p>0.0</p>
              </div>

              <div className='type-box'>
                <p>Ozone-Out</p>
              </div>

              <div className='value-box'>
                  <p>0.0</p>
              </div>
          </div>
          <div className='horizontal-container'>
              <div className='type-box'>
                <p>Chlorine-In</p>
              </div>
              
              <div className='value-box disabled'>
                  <p>0.0</p>
              </div>

              <div className='type-box'>
                <p>Chlorine-Out</p>
              </div>

              <div className='value-box'>
                  <p>0.0</p>
              </div>
          </div>
        </div>
        </div>
        
    </div>
  
  )}

export default Dichlorination;