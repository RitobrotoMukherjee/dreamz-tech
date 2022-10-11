import React from "react";
import PropTypes from 'prop-types';
import './inputs.css';

const TextAreaInput = ({ name, value, handleChange, label }) => {
    return (
        <div className="FormControl TextArea">
            <label htmlFor={`${label}-text-area`} className="FormLabel">
                {label}
            </label>
            <textarea
                name={name}
                id={`${label}-text-area`} type="text" value={value}
                onChange={handleChange}
            />
        </div>
    )
}

TextAreaInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
}

export default TextAreaInput;
