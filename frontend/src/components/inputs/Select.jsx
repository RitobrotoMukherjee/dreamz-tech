import React from "react";
import PropTypes from 'prop-types';
import './inputs.css';
import RandomId from "../../helper/Random";

const SelectField = ({ value, setFunction, options, label }) => {
    return (
        <label className="FormControl">
            <h4 className="FormLabel">{label} </h4>
            <select type="text" value={value} onChange={(e) => setFunction(e.target.value)} >
                <option value="">Select From List</option>
                {options.map(({ name }) => (
                    <option key={RandomId()} value={name}>{name}</option>
                ))}
            </select>
        </label>
    );
}

SelectField.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    setFunction: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.object)
}

export default SelectField;
