import React from 'react';
import { useState } from 'react';
import "../Styles/TableView.css"

const TableView = ({ data, isFullTable = false}) => {

  const [selectedRowIndex, setSelectedRowIndex] = useState(null);


  //Sets a row as selected
  const handleRowClick = (index) => {
    setSelectedRowIndex(index);
  }

  return (
    <div className="TableView">
      <table className="fixed_headers">
        <tbody>
          {data.map((pathogen, index) => (
            <tr key={index} className={selectedRowIndex === index ? 'selected' : ''}
              onClick={() => handleRowClick(index)}>
              <td className="pathogen-name">{pathogen.name}</td>
              <td className="dose-value">{pathogen.oneLog}</td>
              <td className="dose-value">{pathogen.twoLog}</td>
              <td className="dose-value">{pathogen.threeLog}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default TableView;