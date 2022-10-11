import React from "react";
import PropTypes from 'prop-types';
import './inputs.css';

const InputField = ({ name, value, handleChange, label }) => {
    return (
        <div className="FormControl">
            <label htmlFor={`${label}-input`} className="FormLabel">
                {label}
            </label>
            <input
                id={`${label}-input`} type="text" 
                name={name} value={value}
                autoComplete="off"
                required={true}
                placeholder={`Enter ${label}`} 
                pattern="[A-Za-z ]{1,21}"
                onChange={handleChange}
            />
        </div>
    );
}

InputField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
}

export default InputField;
