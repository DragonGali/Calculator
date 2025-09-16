import React from 'react';
import { useState } from 'react';
import "../Styles/TableView.css"

const TableView = ({ data, isFullTable = false}) => {

  /* This is the TableView component, I use it twice in the application, when viewing
     it from PathogenReduction and when opening the FullTable. This component helps display the
     table data into a tabular format with a great presentation. Later on I plan to load the data from a database.

     */

  const [selectedRowIndex, setSelectedRowIndex] = useState(null);

  // Figure out which keys are dose values (exclude "name")
  // So that the component will be dynamic and work with any amount of columns.
  const doseKeys = data.length > 0 
    ? Object.keys(data[0]).filter((key) => key !== "name")
    : [];


  //Sets a row as selected
  const handleRowClick = (index) => {
    setSelectedRowIndex(index);
  }

  return (
    <div className="TableView">
      <table className="fixed_headers">
        <tbody>
          {data.map((pathogen, index) => (
            <tr
              key={index}
              className={selectedRowIndex === index ? "selected" : ""}
              onClick={() => handleRowClick(index)}
            >
              <td className="pathogen-name">{pathogen.name}</td>
              {doseKeys.map((doseKey, i) => (
                <td key={i} className="dose-value">
                  {pathogen[doseKey]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default TableView;