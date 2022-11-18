import React, { useCallback, useState } from 'react';
import './FormComponent.css';

const DEFAULT_STATE = {
    name: '',
    deadline: '',
    isCompleted: false,
};

function FormComponent() {
    const [state, setState] = useState(DEFAULT_STATE);

    const handleChange = useCallback((e) => {
        const { name, value, checked, type } = e.target;

        const newValue = ['radio', 'checkbox'].includes(type)
            ? checked
            : value;

        setState(state => ({
            ...state,
            [name]: newValue,
        }));
    }, [setState]);

    return (
        <form>
            <label className="Form__label_container">
                <h1 className="Form__label">
                    Name:
                </h1>
                <input
                    className="Form__input"
                    type="text"
                    name="name"
                    value={state.name}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label className="Form__label_container">
                <h1 className="Form__label">
                    Deadline:
                </h1>
                <input
                    className="Form__input"
                    type="data"
                    name="deadline"
                    placeholder="mm/dd/yyyy"
                    value={state.deadline}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label className="Form__label_container">
                <h1 className="Form__label_inline">
                    Completed:
                </h1>
                <input
                    className="Form__input Form__checkbox"
                    type="checkbox"
                    value={state.isCompleted}
                    onChange={handleChange}
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