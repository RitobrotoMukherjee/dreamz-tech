import React from "react";
import PropTypes from 'prop-types';
import './inputs.css';

const TextAreaInput = ({ value, setFunction, label }) => {
    return (
        <label className="FormControl TextArea">
            <h4 className="FormLabel">{label} </h4>
            <textarea value={value} onChange={(e) => setFunction(e.target.value)} />
        </label>
    )
}

TextAreaInput.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    setFunction: PropTypes.func.isRequired
}

export default TextAreaInput;
