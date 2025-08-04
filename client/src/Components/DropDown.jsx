import React, { useState } from 'react';
import '../Styles/DropDown.css';

const Dropdown = ({ 
  options = ['aaaaa', 'bbbbb', 'ccccc'], 
  placeholder = "Select an option",
  label = "You Selected",
  emptyText = "Empty",
  colors = ['var(--primary)', 'var(--title-box)'],
  width = 200,
  height = 60
}) => {
  const [isActive, setIsActive] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const handleSelect = (option) => {
    setSelectedValue(option.label);
    setIsActive(false);
  };

  const getColor = (index) => {
    return colors[index % colors.length];
  };

  const getTransform = (index, isActive) => {
    if (!isActive) {
      return `translateY(${3 * index}%)`;
    }
    return `translateY(${100 * (index + 1)}%)`;
  };

  return (
    <div className="dropdown-wrapper">
      {/* Dropdown Container */}
      <div 
        className={`dropdown ${isActive ? 'active' : ''}`}
        style={{ width: `${width}px` }}
      >
        
        {/* Dropdown Label/Button */}
        <span
          className="dropdown-label"
          onClick={handleToggle}
          style={{ height: `${height}px`, lineHeight: `${height}px`}}
        >
          {selectedValue || placeholder}
          <span className="dropdown-arrow">
            {isActive ? '▲' : '▼'}
          </span>
        </span>

        {/* Dropdown List */}
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
              <span style={{ lineHeight: `${height}px` }}>
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