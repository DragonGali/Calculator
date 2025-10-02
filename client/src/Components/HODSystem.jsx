import { useEffect, useState } from 'react';
import Dropdown from '../Components/DropDown';
import Checkbox from '../Components/CheckBox';
import '../Styles/HODSystem.css';
import data from "../data";

import apiService from '../apiService';

/**
 * HODSystem.jsx
 * 
 * Configuration panel for the HOD System.
 * 
 * - Props:
 *   - `width`, `height`: layout (unused here but passed in)
 *   - `appState`: server state slice for HODSystem
 *   - `sendUpdate`: callback to update server state
 * 
 * - Features:
 *   - Dropdowns for module and model selection
 *   - Custom checkbox for vertical mode
 *   - Text input for branch units
 *   - Button group for mode selection (first auto-selected on mount)
 */

const HODSystem = ({ width, height, appState, updateState }) => {
  const [models, setModels] = useState([]);
  const [modules, setModules] = useState([]);
  const [modelMap, setModelMap] = useState({});

  // Process response into models + modules
  const processOptions = (systems) => {
    const map = {};

    Object.values(systems).forEach(series => {
      series.forEach(item => {
        const parts = item.split("-");
        const base = parts.slice(0, -1).join("-"); // everything except last
        const mod = parts[parts.length - 1];       // last part (the module)

        if (!map[base]) {
          map[base] = [];
        }
        if (!map[base].includes(mod)) {
          map[base].push(mod);
        }
      });
    });

    setModelMap(map);
    setModels(Object.keys(map));
  };

  // Fetch options from server
  useEffect(() => {
    const fetchOptions = async () => {
      const result = await apiService.getSupportedSystems();
      if (result.success) {
        processOptions(result.systems);
      } else {
        console.error('Failed to load systems:', result.error);
      }
    };

    fetchOptions();
  }, []);

  // When Model changes → update available modules
  useEffect(() => {
    if (appState?.Model && modelMap[appState.Model]) {
      setModules(modelMap[appState.Model]);
    } else {
      setModules([]);
    }
  }, [appState?.Model, modelMap]);

  const handleClick = (button) => {
    updateState({ "Lamp Type": button });
  };

  // Auto-select first button on mount
  useEffect(() => {
    if (!appState?.pressedButton) {
      handleClick(data.HODButtons[0]);
    }
  }, []);

  return (
    <div className="HODSystem">
      <div className="title-box">
        <p>HOD System</p>
      </div>
      <div className="wrapper">
        <div className="vertical-container">

          {/* Model */}
          <div className="horizontal-container">
            <div className="type-box">
              <p>Model:</p>
            </div>
            <Dropdown
              className="drop-down"
              options={models}
              placeholder={models[0]}
              value={appState?.Model}
              onChange={(option) => {
                updateState({ Model: option}); // reset module when model changes
              }}
            />
          </div>

          {/* Module */}
          <div className="horizontal-container">
            <div className="type-box">
              <p>Module:</p>
            </div>
            <Dropdown
              className="drop-down"
              options={modules}
              placeholder={modules[0]}
              value={appState?.Module}
              onChange={(option) => updateState({ Module: option })}
            />
            <Checkbox
              items={[{ id: 1, text: 'Vertical', disabled: false }]}
              className="check-box"
              checked={appState?.Vertical}
              onChange={(checked) => updateState({ Vertical: checked })}
            />
          </div>

          {/* Branch */}
          <div className="horizontal-container">
            <div className="type-box">
              <p>Branch:</p>
            </div>
            <input
              type="text"
              className="simple-input"
              value={appState?.Branch}
              onChange={(e) => updateState({ Branch: e.target.value })}
            />
            <div className="type-box small">
              <p>[Units]</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="horizontal-container">
            {data.HODButtons.map((button, index) => (
              <div
                key={index}
                className={`button but-${index} ${appState?.["Lamp Type"] === button ? 'IsPressed' : 'NotPressed'}`}
                onClick={() => handleClick(button)}
              >
                <p>{button}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default HODSystem;
