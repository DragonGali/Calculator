import { useState, useEffect, Fragment} from 'react'
import '../Styles/ChooseApplication.css';
import data from "../data";

function ChooseAplication () {
    const [selectedOption, setSelectedOption] = useState('');


     return ( <div className="ChooseApplication">
        <div className="title-box">
                <p>Choose Application</p>
        </div>
        <div className="wrapper">
            <div className="radio-buttons">
                <form>
                    {data.options.map((option, index) => (
                        /*Im using "Fragment here, since I want to put a line (hr)
                        in the middle of the radio buttons while still mapping all of them.
                        I have to use it because when you map normally you can only return one
                        component.
                        */
                        <Fragment key={index}>
                            {index === data.options.length - 1 && <hr />}
                            <label className='form-control'>
                                <input
                                    type="radio"
                                    name="Application"
                                    value={option}
                                    onChange={(e) => {setSelectedOption(e.target.value)}}
                                    checked={selectedOption === option}
                                />
                        <   span>{option}</span>
                            </label>
                    </Fragment>
                    ))}
                    
                </form>
            </div>
        </div>
    
  </div>
  
  )}

export default ChooseAplication;