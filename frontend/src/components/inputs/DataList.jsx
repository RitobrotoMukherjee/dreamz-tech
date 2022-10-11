import React from "react";
import PropTypes from 'prop-types';
import './inputs.css';
import RandomId from "../../helper/Random";

const DataList = ({ name, value, handleChange, options, label }) => {
    return (
        <div className="FormControl">
            <label htmlFor={`${label}-list`} className="FormLabel">
                {label}
            </label>

            <input
                id={`${label}-list`} list="datalist" name={name}
                value={value} onChange={handleChange}
            />
            <datalist id="datalist">
                {options.map(({ name }) => (
                    <option key={RandomId()} value={name}>{name}</option>
                ))}
            </datalist>
        </div>
    );
}

DataList.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.object)
}

export default DataList;
