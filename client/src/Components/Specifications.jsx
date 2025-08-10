import { useState, useEffect, Fragment} from 'react'
import '../Styles/Specifications.css';
import data from "../data";

import Slider from '../Components/Slider.jsx'

function Specifications () {

  const [pressedButton, setPressedButton] = useState(null);

    const handleClick = (button) => {
    setPressedButton(button);
  }

  //This function updates the width and height variable that I use based on the screen sizes
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
   

  return ( <div className="Specifications">
    <div className="title-box">
            <p>Specifications</p>
    </div>
    <div className="wrapper">
        <div className="vertical-container">
                {data.Specifications.top.map((field,index) => (
                  <div className="horizontal-container">
                    <div className="type-box">
                        <p>{field[0]}</p>
                    </div>
                    <Slider width={size.width * 0.05} height={size.height * 0.05} min={field[1]} max={field[2]}></Slider>
                    <div className="type-box">
                        <p>{field[3]}</p>
                    </div>
                </div>
                ))}
                <hr className='line'></hr>
        <div/>
    </div>
    </div>
    </div>
  
  )}

export default Specifications;