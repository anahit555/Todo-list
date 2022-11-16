import React from "react";
import { useState } from "react";
import './FormComponent.css';

function FormComponent (){
    const [name, setName] = useState("");


    return(
        <form>
            <label className="Form__label_container">
                <h1 className="Form__label">
                    Name:
                </h1>
                    <input 
                        className="Form__input"
                        type="text"
                        name="Name" 
                        placeholder=""
                        value={name}
                        onChange={(e) => setName(e.target.value)} 
                    />
            </label>
            <br/>
            <label className="Form__label_container">
               <h1 className="Form__label">
                    Deadline:
                </h1>
                    <input 
                        className="Form__input"
                        type="data"
                        name="deadline" 
                        placeholder="mm/dd/yyyy" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                />
            </label>
            <br/>
            <label className="Form__label_container">
                <h1 className="Form__label_inline">
                    Completed:  
                </h1>
                <input 
                    className="Form__input Form__checkbox"
                    type="checkbox"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <br />
                <input
                    className="Form__button"
                    type="submit"
                />
        </form>
        
        
    );
}

export default FormComponent;