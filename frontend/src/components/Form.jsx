import React from "react";
import PropTypes from 'prop-types';
import { useState } from "react";
import InputField from "./inputs/Input";

const TaxForm = ({ states }) => {
    const [name, setName] = useState('');
    const [stateName, setStatename] = useState('');
    const [at, setAt] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form className="flex flex-col w-full" onSubmit={handleSubmit}>
            <div className="flex flex-row items-center">
                <InputField value={name} setFunction={setName} />
                <InputField value={name} setFunction={setName} />
                <InputField value={name} setFunction={setName} />
            </div>
        </form>
    )
}

TaxForm.propTypes = {
    states: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TaxForm;
