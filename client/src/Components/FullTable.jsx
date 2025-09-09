import React, { useState } from 'react';
import { X } from 'lucide-react';

const FullTable = ({ isOpen, onClose, children }) => {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  if (!isOpen) return null;

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="fixed z-50 bg-white rounded-lg shadow-lg border w-96 h-80"
      style={{ left: position.x, top: position.y }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div 
        className="p-3 bg-gray-100 rounded-t-lg cursor-move flex justify-between items-center"
        onMouseDown={handleMouseDown}
      >
        <span className="font-medium">Table</span>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X size={16} />
        </button>
      </div>
      
      <div className="p-4 h-full overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default FullTable;