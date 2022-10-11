import React from "react";
import PropTypes from 'prop-types';
import './inputs.css';
import RandomId from "../../helper/Random";

const SelectField = ({ name, value, handleChange, options, label }) => {
    return (
        <div className="FormControl">
            <label htmlFor={`${label}-select`} className="FormLabel">
                {label}
            </label>

            <select
                name={name}
                id={`${label}-select`} type="text" value={value}
                onChange={handleChange}
                required={true}
            >
                <option value="">Select From List</option>
                {options.map(({ name }) => (
                    <option key={RandomId()} value={name}>{name}</option>
                ))}
            </select>
        </div>
    );
}

SelectField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.object)
}

export default SelectField;
