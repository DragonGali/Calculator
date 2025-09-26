import { useEffect } from 'react';
import Dropdown from '../Components/DropDown';
import Checkbox from '../Components/CheckBox';
import '../Styles/HODSystem.css';
import data from "../data";

function HODSystem({ width, height, appState, sendUpdate}) {

  
  // When button is clicked, notify server + update state
  const handleClick = (button) => {
    sendUpdate("HODSystem", "setPressedButton", { pressedButton: button });
  };
  

  // On mount, select first button if none is chosen
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
          
          {/* Module */}
          <div className="horizontal-container">
            <div className="type-box">
              <p>Module:</p>
            </div>
            <Dropdown
              className="drop-down"
              options={[...data.modules]}
              placeholder={data.modules[0].label}
              value={appState?.module} // controlled
              onChange={(option) => { sendUpdate("HODSystem", "setModule", { module: option }) }}
            />
          </div>

          {/* Model */}
          <div className="horizontal-container">
            <div className="type-box">
              <p>Model:</p>
            </div>
            <Dropdown
              className="drop-down"
              options={[...data.model]}
              placeholder={data.model[0].label}
              value={appState?.model}
              onChange={(option) => { sendUpdate("HODSystem", "setModel", { model: option }) }}
            />
            <Checkbox
              items={[{ id: 1, text: 'Vertical', disabled: false }]}
              className="check-box"
              checked={appState?.vertical}
              onChange={(checked) => { sendUpdate("HODSystem", "setVertical", { vertical: checked }) }}
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
              value={appState?.branch ?? 1}
              onChange={(e) => { sendUpdate("HODSystem", "setBranch", { branch: e.target.value }) }}
            />
            <div className="type-box small">
              <p>[Units]</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="horizontal-container">
            {data.HODButtons.map((button, index) => (
              <div className="buttons" key={index}>
                <div
                  className={`button ${appState?.pressedButton === button ? 'IsPressed' : 'NotPressed'}`}
                  onClick={() => handleClick(button)}
                >
                  <p>{button}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default HODSystem;