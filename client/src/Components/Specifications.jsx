import { useState, useEffect, Fragment} from 'react'
import '../Styles/Specifications.css';
import data from "../data";

import Slider from '../Components/Slider.jsx'
import DropDown from '../Components/DropDown.jsx'

function Specifications ({width, height}) {

  //All the texts that are used in the buttons and dropdowns.
  const topData = data.Specifications.top;
  const bottomData = data.Specifications.bottom;

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
                {topData.map((field,index) => (
                  <div className="horizontal-container" key={index}>
                    <div className="type-box">
                        <p>{field[0]}</p>
                    </div>
                    <Slider  min={field[1]} max={field[2]}></Slider>
                    <div className="type-box">
                        <p>{field[3]}</p>
                    </div>
                    
                </div>
                ))}
                <hr className='line'></hr>
                <div className='horizontal-container'>
                    <div className='type-box'>
                      <p>{bottomData.fieldName}</p>
                    </div>
                    <Slider className="slider"/>
                    <DropDown options={[...bottomData.options]}
                    placeholder={bottomData.options[0].value}>
                    </DropDown>
                </div>
                <div className='horizontal-container'>
                  {bottomData.buttons.map((button, index) => (
                    <div className='button' key={index} onClick={() => handleClick(button)}>
                            <p>{button}</p>
                    </div>
                ))}
                </div>
        <div/>
    </div>
    </div>
    </div>
  
  )}

export default Specifications;