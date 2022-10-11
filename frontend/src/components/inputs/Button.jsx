import React from "react";
import PropTypes from 'prop-types';

const Button = ({ type }) => {
    return (
        <div className="FormControl ButtonCenterLg">
            <button className="Button" aria-label="Submit" type={type}>Submit</button>
        </div>
    );
}

Button.propTypes = {
    type: PropTypes.string.isRequired
}

export default Button;
