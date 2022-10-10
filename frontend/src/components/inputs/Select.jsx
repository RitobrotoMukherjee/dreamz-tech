import React from "react";
import PropTypes from 'prop-types';
import './inputs.css';
import RandomId from "../../helper/Random";

const SelectField = ({ value, setFunction, options }) => {
    return (
        <label className="FormControl">
            <h4 className="FormLabel">State </h4>
            <select type="text" value={value} onChange={(e) => setFunction(e.target.value)} >
                {options.map(({ name }) => (
                    <option key={RandomId()} value={name}>{name}</option>
                ))}
            </select>
        </label>
    );
}

SelectField.propTypes = {
    value: PropTypes.string.isRequired,
    setFunction: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.object)
}

export default SelectField;
