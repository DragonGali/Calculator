/**
 * Specifications.jsx
 *
 * Component for setting various parameters via sliders, dropdowns, and buttons.
 *
 * Structure:
 * - Top section: multiple rows with label, slider, and unit
 * - Bottom section: a main slider, dropdown, and action buttons
 *
 * Props:
 * - width, height: used for responsive sizing (currently passed but not directly used)
 *
 * State:
 * - pressedButton: tracks which bottom section button is pressed
 */


/**
 * Specifications.jsx (Updated with Dynamic Ranges from Backend)
 *
 * Component for setting UV system parameters.
 * Fetches min/max ranges from backend based on selected system.
 */

import { useState, useEffect } from 'react';
import '../Styles/Specifications.css';
import Slider from '../Components/Slider.jsx';
import DropDown from '../Components/DropDown.jsx';
import apiService from '../apiService';

const Specifications = ({ appState, updateState}) => {
  const [pressedButton, setPressedButton] = useState(null);
  const [ranges, setRanges] = useState(appState?.ranges);

  // Fetch parameter ranges when system type changes
  useEffect(() => {
    
  }, []);

  // Use ranges from backend or defaults
  const flowMin = ranges?.flow?.min ?? 10;
  const flowMax = ranges?.flow?.max ?? 500;
  const uvtMin = ranges?.uvt?.min ?? 70;
  const uvtMax = ranges?.uvt?.max ?? 98;

  return (
    <div className="Specifications">
      <div className="title-box">
        <p>Specifications</p>
      </div>
      <div className="wrapper">
        <div className="vertical-container">
          {/* Efficiency - typically 0-100% */}
          <div className="horizontal-container">
            <div className="type-box">
              <p>Efficiency:</p>
            </div>
            <Slider
              min={0}
              max={100}
              step={1}
              value={appState?.Efficiency}
              onChange={(value) => updateState({ Efficiency: value })}
            />
            <div className="type-box">
              <p>[% Efficiency]</p>
            </div>
          </div>

          {/* Relative Drive - typically 0-100% */}
          <div className="horizontal-container">
            <div className="type-box">
              <p>Relative Drive:</p>
            </div>
            <Slider
              min={0}
              max={100}
              step={1}
              value={appState?.["Relative Drive"]}
              onChange={(value) => updateState({ "Relative Drive": value })}
            />
            <div className="type-box">
              <p>[% Power]</p>
            </div>
          </div>

          {/* UVT @ 254nm - uses backend ranges */}
          <div className="horizontal-container">
            <div className="type-box">
              <p>UVT @ 254nm:</p>
            </div>
            <Slider
              min={uvtMin}
              max={uvtMax}
              step={0.1}
              value={appState?.["UVT-1cm@254nm"]}
              onChange={(value) => updateState({ "UVT-1cm@254nm": value })}
            />
            <div className="type-box">
              <p>[%-1cm]</p>
            </div>
          </div>

          {/* UVT @ 215nm - uses backend ranges */}
          <div className="horizontal-container">
            <div className="type-box">
              <p>UVT @ 215nm:</p>
            </div>
            <Slider
              min={uvtMin}
              max={uvtMax}
              step={0.1}
              value={appState?.["UVT-1cm@215nm"]}
              onChange={(value) => updateState({ "UVT-1cm@215nm": value })}
            />
            <div className="type-box">
              <p>[%-1cm]</p>
            </div>
          </div>

          <hr className='line'></hr>

          {/* Flow Rate - uses backend ranges */}
          <div className='horizontal-container'>
            <div className='type-box'>
              <p>Flow Rate:</p>
            </div>
            <Slider
              min={flowMin}
              max={flowMax}
              step={1}
              value={appState?.["Flow Rate"]}
              onChange={(value) => updateState({ "Flow Rate": value })}
            />
            <DropDown
              options={[
                { label: 'm³/h', value: 'm3/h' },
                { label: 'US GPM', value: 'US GPM' }
              ]}
              value={appState?.["Flow Units"]}
              placeholder={appState?.["Flow Units"]}
              onChange={(value) => updateState({ "Flow Units": value })}
            />
          </div>

          {/* Action Buttons */}
          <div className='horizontal-container'>
            <div 
              className={`button ${pressedButton === 'Reset To Default Values' ? 'IsPressed' : ''}`}
              onClick={() => setPressedButton("Reset To Default Values")}
            >
              <p>Reset To Default Values</p>
            </div>
            <div 
              className={`button ${pressedButton === 'Flow For Target Dose' ? 'IsPressed' : ''}`}
              onClick={() => setPressedButton("Flow For Target Dose")}
            >
              <p>Flow For Target Dose</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specifications;