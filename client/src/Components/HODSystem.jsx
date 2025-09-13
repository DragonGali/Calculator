import { useState, useEffect } from 'react'
import Dropdown from '../Components/DropDown';
import Checkbox from '../Components/CheckBox';
import InputField from '../Components/InputField';

import '../Styles/HODSystem.css';
import data from "../data";

function HODSystem ({width, height}) {
  const [pressedButton, setPressedButton] = useState(null);

  //Changes which button is currently pressed
  const handleClick = (button) => {
    setPressedButton(button);
  };


  useEffect(() => {
    //Sets the first button as clicked from the start
    handleClick(data.HODButtons[0]);
  }, []);

     return ( <div className="HODSystem">
        <div className="title-box">
            <p>HOD System</p>
        </div>
        <div className="wrapper">
            <div className="vertical-container">
                <div className="horizontal-container">
                    <div className="type-box">
                        <p>Module:</p>
                    </div>
                    <Dropdown className="drop-down" 
                    options={[...data.modules]}
                    height={height * 0.047} width={width * 0.136}//setting size of the component
                    placeholder={data.modules[0].label}
                    />
                </div>
                <div className='horizontal-container'>
                    <div className="type-box">
                        <p>Model:</p>
                    </div>
                    <Dropdown className="drop-down" 
                    options={[...data.model]}
                    height={height * 0.05} width={width * 0.08}
                    placeholder={data.model[0].label}
                    />
                    <Checkbox items={[{ id: 1, text: 'Vertical', disabled: false }]} className="checkbox" />
                </div>
                <div className='horizontal-container'>
                    <div className="type-box">
                        <p>Branch:</p>
                    </div>
                   <InputField placeholder='' value={1} height={height* 0.05} width={width * 0.08}/>
                   <div className="type-box">
                        <p>[Units]</p>
                    </div>
                </div>
                <div className='horizontal-container'>
                    {data.HODButtons.map((button, index) => (
                        <div className="buttons" key={index}>
                            <div className={`button ${pressedButton === button ? 'IsPressed' : 'NotPressed'}`} onClick={() => handleClick(button)}>
                                <p>{button}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
            
    </div>
  
  )}

export default HODSystem;