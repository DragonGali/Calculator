import { useState, useEffect } from 'react'
import Dropdown from '../Components/DropDown';

import '../Styles/HODSystem.css';
import data from "../data";

function HODSystem () {
    const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

     return ( <div className="HODSystem">
        <div className="wrapper">
            <div className="title-box">
                <p>HOD System</p>
            </div>
                <div className="horizontal-container">
                <div className="type-box">
                    <p>Module:</p>
                </div>
                <Dropdown className="drop-down" 
                options={[...data.modules]}
                height={size.height * 0.05} width={size.width * 0.15}
                placeholder={data.modules[0].label}
                />
                <div className="type-box">
                    <p>Model:</p>
                </div>
                <Dropdown className="drop-down" 
                options={[...data.model]}
                height={size.height * 0.05} width={size.width * 0.07}
                placeholder={data.model[0].label}
                />
                
            </div>
            </div>
            
        </div>
  
  )}

export default HODSystem;