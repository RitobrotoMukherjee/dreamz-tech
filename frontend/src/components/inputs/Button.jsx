import React from "react";
import PropTypes from 'prop-types';

const Button = ({ type, label, className, handleClick }) => {
    return (
        <div className={`FormControl ${className}`}>
            <button
                className="Button" aria-label={type}
                type={type} onClick={handleClick}
            >
                {label}
            </button>
        </div>
    );
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    handleClick: PropTypes.func
}

export default Button;
