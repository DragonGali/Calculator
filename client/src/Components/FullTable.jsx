import React, { useState , useEffect, useRef} from 'react';
import '../Styles/FullTable.css';

const FullTable = ({content}) => {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [dragging, setDragging] = useState(false);
  const offsetRef = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setDragging(true);
    offsetRef.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    setPosition({
      x: e.clientX - offsetRef.current.x,
      y: e.clientY - offsetRef.current.y,
    });
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <div
      className="FullTable"
      style={{ top: position.y, left: position.x }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className="draggable-header" onMouseDown={handleMouseDown}>
        <p>Pathogen Specific Log Inactivation [mJ/cm2] - Full Data Table</p>
        <div className='icons'>
            <img className='icon' src="/Close Icon.svg"/>
            <img className='icon' src="/Expand Icon.svg"/>
        </div>
      </div>
      <div className="draggable-content">
        {content}
      </div>
    </div>
  );
};


export default FullTable;