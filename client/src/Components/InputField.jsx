import React, { useState } from 'react';
import '../Styles/InputField.css';

const InputField = ({ 
  type = "text", 
  placeholder = "Enter text", 
  value, 
  onChange,
  name,
  id,
  width = 115,
  height = 30,
  isSmall = false
}) => {
  const [inputValue, setInputValue] = useState(value || '');
  const [focused, setFocused] = useState(false);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className={`txtbx txtbx--batman ${inputValue.length > 0 ? 'filled' : ''}`} style={{ width: `${width}px`, height: `${height}px` }}>
      <input
        type={type}
        name={name}
        id={id}
        className={`txtbx__field txtbx__field--batman ${isSmall ? 'small-padding' : ''}`}
        value={inputValue}
        onChange={handleChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      <label htmlFor={id} className="txtbx__label txtbx__label--batman">
        <span className="txtbx__label-content txtbx__label-content--batman">
          {placeholder}
        </span>
      </label>
    </div>
  );
};

export default InputField;