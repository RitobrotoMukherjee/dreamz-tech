import React from "react";
import PropTypes from 'prop-types';
import './inputs.css';
import RandomId from "../../helper/Random";

const DataList = ({ value, setFunction, options, label }) => {
    return (
        <label className="FormControl">
            <h4 className="FormLabel">{label} </h4>
            <input list="datalist" value={value} onChange={(e) => setFunction(e.target.value)} />
            <datalist id="datalist">
                {options.map(({ name }) => (
                    <option key={RandomId()} value={name}>{name}</option>
                ))}
            </datalist>
        </label>
    );
}

DataList.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    setFunction: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.object)
}

export default DataList;
