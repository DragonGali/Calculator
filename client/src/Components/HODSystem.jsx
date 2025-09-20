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
       
      </div>
    </div>
  )
}

export default HODSystem;