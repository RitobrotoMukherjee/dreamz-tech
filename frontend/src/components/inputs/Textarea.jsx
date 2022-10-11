import React from "react";
import PropTypes from 'prop-types';
import './inputs.css';

const TextAreaInput = ({ value, setFunction, label }) => {
    return (
        <div className="FormControl">
            <label htmlFor={`${label}-text-area`} className="FormLabel">
                {label}
            </label>
            <textarea
                id={`${label}-text-area`} type="text" value={value}
                onChange={(e) => setFunction(e.target.value)}
            />
        </div>
    )
}

TextAreaInput.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    setFunction: PropTypes.func.isRequired
}

export default TextAreaInput;
