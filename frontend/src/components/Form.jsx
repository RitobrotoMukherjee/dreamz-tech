import React from "react";
import PropTypes from 'prop-types';
import { useState } from "react";

const TaxForm = ({ states }) => {
    const [name, setName] = useState('');
    const [stateName, setStatename] = useState('');
    const [at, setAt] = useState('');

    return (
        <form >

        </form>
    )
}

TaxForm.propTypes = {
    states: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TaxForm;
