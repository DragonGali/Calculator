import { useState, useEffect } from 'react'
import Dropdown from '../Components/DropDown';
import Checkbox from '../Components/CheckBox';
import InputField from '../Components/InputField';

import '../Styles/HODSystem.css';
import data from "../data";

function HODSystem () {
    const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const [pressedButton, setPressedButton] = useState(null);

  const handleClick = (button) => {
    setPressedButton(button);
  };


  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
                    height={size.height * 0.047} width={size.width * 0.15}
                    placeholder={data.modules[0].label}
                    />
                </div>
                <div className='horizontal-container'>
                    <div className="type-box">
                        <p>Model:</p>
                    </div>
                    <Dropdown className="drop-down" 
                    options={[...data.model]}
                    height={size.height * 0.047} width={size.width * 0.08}
                    placeholder={data.model[0].label}
                    />
                    <Checkbox items={[{ id: 1, text: 'Vertical', disabled: false }]} className="checkbox" />
                </div>
                <div className='horizontal-container'>
                    <div className="type-box">
                        <p>Branch:</p>
                    </div>
                   <InputField placeholder='' value={1} height={size.height* 0.05} width={size.width * 0.08}/>
                   <div className="type-box">
                        <p>[Units]</p>
                    </div>
                </div>
                <div className='horizontal-container'>
                    {data.HODButtons.map((button, index) => (
                        <div className="buttons" key={index}>
                            <div className={`button ${pressedButton === button ? 'IsPressed' : ''}`} onClick={() => handleClick(button)}>
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