import React from "react";
import PropTypes from 'prop-types';
import './inputs.css';

const InputField = ({ value, setFunction, label }) => {
    return (
        <div className="FormControl">
            <label htmlFor={`${label}-input`} className="FormLabel">
                {label}
            </label>
            <input id={`${label}-input`} type="text" value={value} onChange={(e) => setFunction(e.target.value)} />
        </div>
    );
}

InputField.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    setFunction: PropTypes.func.isRequired
}

export default InputField;
