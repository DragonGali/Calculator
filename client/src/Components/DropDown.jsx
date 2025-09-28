import React, { useState, useEffect } from 'react';
import '../Styles/DropDown.css';

const Dropdown = ({ 
  options = ['aaaaa', 'bbbbb', 'ccccc'], 
  placeholder = "Select an option",
  label = "You Selected",
  emptyText = "Empty",
  colors = ['var(--primary)', 'var(--title-box)'],
  value,          // controlled value
  onChange        // controlled callback
}) => {
  const [isActive, setIsActive] = useState(false);
  const [internalValue, setInternalValue] = useState('');

  // If parent passes value, prefer it over internal state
  const selectedValue = value ?? internalValue;

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const handleSelect = (option) => {
    if (onChange) {
      onChange(option.value ?? option.label); // notify parent
      console.log("check");
    } else {
      setInternalValue(option.label); // uncontrolled fallback
    }
    setIsActive(false);
  };

  const getColor = (index) => colors[index % colors.length];

  const getTransform = (index, isActive) => {
    if (!isActive) return `translateY(${3 * index}%)`;
    return `translateY(${100 * (index)}%)`;
  };

  return (
    <div className="dropdown-wrapper">
      <div 
        className={`dropdown ${isActive ? 'active' : ''}`}
      >
        {/* Label */}
        <span
          className="dropdown-label"
          onClick={handleToggle}
        >
          <span className='dropdown-text'>{selectedValue || placeholder}</span>
          <span className="dropdown-arrow">
            {isActive ? '▲' : '▼'}
          </span>
        </span>

        {/* Options */}
        <ul className="dropdown-list">
          {options.map((option, index) => (
            <li
              key={option.value || index}
              className="dropdown-item"
              onClick={() => handleSelect(option)}
              style={{
                backgroundColor: getColor(index),
                zIndex: options.length - index,
                transform: getTransform(index, isActive)
              }}
            >
              <span>
                {option.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
