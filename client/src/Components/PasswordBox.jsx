/**
 * PasswordBox.jsx
 * 
 * A full-screen password input component for developer access.
 * 
 * - Props:
 *   - `onClose`: called when the box is closed/cancelled
 *   - `onPasswordCorrect`: called when the correct password is entered
 * 
 * - Features:
 *   - Blinking cursor effect
 *   - Hidden input keeps value synced with custom display
 *   - Shows error message briefly on wrong password
 *   - Supports Enter to submit and Escape to cancel
 */



import React, { useState, useEffect, useRef } from 'react';
import '../Styles/PasswordBox.css';
import data from "../data";

const PasswordBox = ({ onClose, onPasswordCorrect }) => {
  const [password, setPassword] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [showError, setShowError] = useState(false);
  const inputRef = useRef(null);

  // blinking cursor
  useEffect(() => {
    const id = setInterval(() => setShowCursor(s => !s), 530);
    return () => clearInterval(id);
  }, []);

  // focus the hidden input on mount
  useEffect(() => inputRef.current?.focus(), []);

  const checkPassword = (value = password) => {
    const correct = data.password;
    if (value === correct) {
      onPasswordCorrect?.(true);
      onClose?.();
    } else {
      setShowError(true);
      setPassword('');
      setTimeout(() => setShowError(false), 2000);
      inputRef.current?.focus();
    }
  };

  const renderPasswordDisplay = () => {
    const asterisks = '*'.repeat(password.length);
    const cursor = showCursor && !isTyping ? '|' : '';
    return (
      <span className="password-text">
        {asterisks}
        <span className="cursor">{cursor}</span>
      </span>
    );
  };

  return (
    <div className="PasswordBox">
      <div className='container'>
        <p className={`title ${showError ? 'error' : ''}`}>
          {showError ? 'Wrong Password!' : 'Please Enter Developer Password:'}
        </p>

        {/* clickable typing area — focuses the real (hidden) input */}
        <div
          className='type-bar'
          onClick={() => inputRef.current?.focus()}
          tabIndex={0}
        >
          {renderPasswordDisplay()}
        </div>

        {/* Real input keeps value in sync; Enter uses e.currentTarget.value (no race) */}
        <input
          ref={inputRef}
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setIsTyping(true);
            setTimeout(() => setIsTyping(false), 100);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              // use the input's current value (guaranteed correct)
              checkPassword(e.currentTarget.value);
            } else if (e.key === 'Escape') {
              onClose?.();
            }
          }}
          // visually hidden but focusable
          style={{
            position: 'absolute',
            left: '-9999px',
            width: '1px',
            height: '1px',
            opacity: 0,
            border: 'none',
            padding: 0,
            margin: 0,
          }}
        />

        <div className='password-buttons'>
          <div className='password-button'>
            <p onClick={() => checkPassword(password)}>OK</p>
          </div>
          <div className='password-button' onClick={onClose}>
            <p>Cancel</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordBox;
