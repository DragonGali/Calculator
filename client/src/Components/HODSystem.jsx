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
 * Auto-selects first module when model changes.
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
    
    // Set initial model if not set
    const firstModel = Object.keys(map)[0];
    if (firstModel && !appState?.Model) {
      const firstModule = map[firstModel][0];
      updateState({ Model: firstModel, Module: firstModule });
    }
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

  // When Model changes → update available modules AND auto-select first one
  useEffect(() => {
    if (appState?.Model && modelMap[appState.Model]) {
      const availableModules = modelMap[appState.Model];
      setModules(availableModules);
      
      // Auto-select first module if current module is not in the list
      if (availableModules.length > 0 && !availableModules.includes(appState?.Module)) {
        updateState({ Module: availableModules[0] });
      }
    } else {
      setModules([]);
    }
  }, [appState?.Model, modelMap]);

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
              options={models.map(m => ({ label: m, value: m }))}
              placeholder={models[0] || "Select Model"}
              value={appState?.Model}
              onChange={(option) => {
                // When model changes, module will auto-update via useEffect
                updateState({ Model: option });
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
              options={modules.map(m => ({ label: m, value: m }))}
              placeholder={modules[0] || "Select Module"}
              value={appState?.Module}
              onChange={(option) => updateState({ Module: option })}
            />
            <Checkbox
              items={[{ id: 1, text: 'Vertical', disabled: false }]}
              className="check-box"
              checked={appState?.Position === "Vertical"}
              onChange={(checked) => updateState({ Position: checked ? "Vertical" : "Horizontal" })}
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
              value={appState?.Branch || "1"}
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
                className={`button but-${index} ${appState?.["Lamp Type"] === button.replaceAll(" ", "") ? 'IsPressed' : 'NotPressed'}`}
                onClick={() => updateState({"Lamp Type" : button.replaceAll(" ", "")})}
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