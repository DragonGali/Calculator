import { useState, useEffect } from 'react'
import '../Styles/ChooseApplication.css';

function ChooseAplication () {
    const [selectedOption, setSelectedOption] = useState('');

    const options = [
        'Full Range UV Systems',
        'Medium Pressure UV Systems',
    ]


     return ( <div className="ChooseApplication">
        <div className="title-box">
                <p>Choose Application</p>
        </div>
        <div className="wrapper">
            <div className="radio-buttons">
                <form>
                    {options.map((option) => (
                        <label>
                            <input
                            type="radio"
                            name="Application"
                            value={option}
                            onChange={(e) => {setSelectedOption(e.target.value)}}
                            checked={selectedOption === option}
                            key={options.indexOf(option)}>
                            </input>
                            <span>{option}</span>
                        </label>
                    ))}
                    <hr />
                    <label>
                            <input
                            type="radio"
                            name="Application"
                            value="Decholoration | Ozone Decomposition"
                            onChange={(e) => {setSelectedOption(e.target.value)}}
                            checked={selectedOption === "Decholoration | Ozone Decomposition"}>
                            </input>
                            <span>{"Decholoration | Ozone Decomposition"}</span>
                    </label>
                    
                </form>
            </div>
        </div>
    
  </div>
  
  )}

export default ChooseAplication;