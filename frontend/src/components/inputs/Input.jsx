import React from "react";
import PropTypes from 'prop-types';
import './inputs.css';

const InputField = ({ name, value, setFunction, label }) => {
    return (
        <div className="FormControl">
            <label htmlFor={`${label}-input`} className="FormLabel">
                {label}
            </label>
            <input
                id={`${label}-input`} type="text" 
                name={name} value={value}
                placeholder={`Enter ${label}`} pattern="([A-Z])[\w+.]{1,}"
                onChange={(e) => setFunction(e.target.value)}
            />
        </div>
    );
}

InputField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    setFunction: PropTypes.func.isRequired
}

export default InputField;
