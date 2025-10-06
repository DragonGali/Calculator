/**
 * Slider.jsx
 *
 * Custom slider with an editable numeric input.
 *
 * Props:
 * - min: minimum value (required)
 * - max: maximum value (required)
 * - step: step size (default 1)
 * - value: current value (required, controlled externally)
 * - onChange: callback(newValue) -> parent handles state update
 *
 * Features:
 * - Fully controlled component (no internal initial value)
 * - Slider and input are synchronized
 * - Input only allows numeric values
 * - Clamps input to min/max
 * - Editable input clears on focus for easy typing
 */

import React, { useState } from 'react';
import '../Styles/Slider.css';

const Slider = ({ 
  min, 
  max, 
  step = 1, 
  value, 
  onChange
}) => {
  const [inputValue, setInputValue] = useState(value?.toString() || '');
  const [isEditing, setIsEditing] = useState(false);

  const handleSliderChange = (e) => {
    const newValue = Number(e.target.value);
    onChange(newValue);
    setInputValue(newValue.toString());
  };

  const handleInputKeyPress = (e) => {
    // Only allow digits and control keys
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
    if (/^\d*$/.test(inputVal)) {
      setInputValue(inputVal);
    }
  };

  const handleInputFocus = () => {
    setIsEditing(true);
    setInputValue(''); // Clear input for typing
  };

  const handleInputBlur = () => {
    setIsEditing(false);
    if (inputValue === '') {
      setInputValue(value.toString());
      return;
    }

    let numericValue = Number(inputValue);
    if (numericValue > max) numericValue = max;
    else if (numericValue < min) numericValue = min;

    onChange(numericValue);
    setInputValue(numericValue.toString());
  };

  return (
    <div className="range-slider-container">
      {/* Editable numeric input */}
      <input
        type="text"
        value={isEditing ? inputValue : value}
        onChange={handleInputChange}
        onKeyPress={handleInputKeyPress}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        className="range-value-display"
      />

      {/* Range slider */}
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
