import React, { useState } from 'react';
import '../Styles/Slider.css';

const Slider = ({ 
  min = 0, 
  max = 500, 
  step = 1, 
  initialValue = 100,
  width = '300px',
  height = '70px'
}) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(Number(e.target.value));
  };

  return (
    <div className="range-slider-container" style={{ width , height}}>
      {/* Value display on top */}
      <div className="range-value-display">
        {value}
      </div>
      
      {/* Range input */}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        className="range-slider"
      />
    </div>
  );
};

export default Slider