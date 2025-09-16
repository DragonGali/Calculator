import React from 'react';
import '../Styles/CheckBox.css';

const Checkbox = ({
  text = "Vertical",
  disabled = false,
  checked = false,
  onChange = () => {}
}) => {
  return (
    <div className="check-box">
      <label>
        <input
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange(e.target.checked)}
        />
        <span className="label-text">{text}</span>
      </label>
    </div>
  );
};

export default Checkbox;
