import React, { useState } from 'react';
import '../Styles/Slider.css';

const Slider = ({ 
  min = 0, 
  max = 500, 
  step = 1, 
  initialValue = 100,
}) => {
  const [value, setValue] = useState(initialValue);
  const [inputValue, setInputValue] = useState(initialValue.toString());
  const [isEditing, setIsEditing] = useState(false);

  const handleSliderChange = (e) => {
    const newValue = Number(e.target.value);
    setValue(newValue);
    setInputValue(newValue.toString());
  };

  const handleInputKeyPress = (e) => {
    // Only allow digits
    if (!/[\d]/.test(e.key) && 
        !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab', 'Enter'].includes(e.key)) {
      e.preventDefault();
    }
    
    if (e.key === 'Enter') {
      e.target.blur();
    }
  };

  const handleInputChange = (e) => {
    const inputVal = e.target.value;
    
    // Only allow digits or empty string
    if (/^\d*$/.test(inputVal)) {
      setInputValue(inputVal);
    }
  };

  const handleInputFocus = () => {
    setIsEditing(true);
    setInputValue(''); // Clear the input when starting to type
  };

  const handleInputBlur = () => {
    setIsEditing(false);
    
    // If empty, use current value
    if (inputValue === '') {
      setInputValue(value.toString());
      return;
    }
    
    let numericValue = Number(inputValue);
    
    // Clamp to min/max
    if (numericValue > max) {
      numericValue = max;
    } else if (numericValue < min) {
      numericValue = min;
    }
    
    setValue(numericValue);
    setInputValue(numericValue.toString());
  };

  return (
    <div className="range-slider-container">
      {/* Editable value display on top */}
      <input
        type="text"
        value={isEditing ? inputValue : value}
        onChange={handleInputChange}
        onKeyPress={handleInputKeyPress}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        className="range-value-display"
      />
      
      {/* Range input */}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleSliderChange}
        className="range-slider"
      />
    </div>
  );
};

export default Slider;