import React from "react";
import PropTypes from 'prop-types';
import './inputs.css';
import RandomId from "../../helper/Random";

const DataList = ({ value, setFunction, options, label }) => {
    return (
        <div className="FormControl">
            <label htmlFor={`${label}-list`} className="FormLabel">
                {label}
            </label>

            <input
                id={`${label}-list`} list="datalist"
                value={value} onChange={(e) => setFunction(e.target.value)}
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
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    setFunction: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.object)
}

export default DataList;
