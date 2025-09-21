import { useState, useEffect, Fragment} from 'react'
import '../Styles/Results.css';
import data from "../data";

import DropDown from '../Components/DropDown.jsx';

const Results = ({width, height}) => {

  return ( <div className="Results">
    <div className="title-box">
            <p>Results</p>
    </div>
    <div className="wrapper">
      {/* <div className="vertical-container">
        {data.Results.map((field, index) => (
        <div key={index}>
          <div className="horizontal-container">
            <div className="type-box">
              <p>{field.fieldName}</p>
            </div>

            <div className="value-box">
              <p>{field.value}</p>
            </div>

            {/* Scale or Dropdown }
            {field.options ? (
              //If the row contains "options" than its a drop-down.
              <DropDown
                className="drop-down"
                options={[...field.options]}
                height={Math.max(30, Math.min(height * 0.0485, 64))}
                width={Math.max(53, Math.min(width * 0.055, 200))}
                placeholder={field.options[0].value}
              />
            ) : (
              // Regular scale for other rows
              <div className="type-box small">
                <p>{field.scale}</p>
              </div>
            )}
            
          </div>
          
          {/* Separator line after first row }
          {index === 0 && (<hr className="line"/>)}
        </div>
      ))}
        </div> */}
    </div>
    
    </div>
  
  )}

export default Results;