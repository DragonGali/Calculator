import React, { useState } from 'react';
import '../Styles/CheckBox.css';

const Checkbox = ({ 
  items = [
    { id: 1, text: 'Item One', disabled: false },
    { id: 2, text: 'Item Two', disabled: false },
    { id: 3, text: 'Item Three', disabled: true }
  ]
}) => {
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (id) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="buttons">
      {items.map((item, index) => (
        <React.Fragment key={item.id}>
          <label>
            <input
              type="checkbox"
              name="check"
              checked={checkedItems[item.id] || false}
              disabled={item.disabled}
              onChange={() => handleCheckboxChange(item.id)}
            />
            <span className="label-text">{item.text}</span>
          </label>
          {index < items.length - 1 && <br />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Checkbox;