import React from "react";
import PropTypes from 'prop-types';
import './inputs.css';

const InputField = ({ value, setFunction, label }) => {
    return (
        <label className="FormControl">
            <h4 className="FormLabel">{label} </h4>
            <input type="text" value={value} onChange={(e) => setFunction(e.target.value)} />
        </label>
    );
}

InputField.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    setFunction: PropTypes.func.isRequired
}

export default InputField;
