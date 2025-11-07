import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({
  label,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
}) => {
  return (
    <button
      className={`btn ${variant} ${size}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

// ✅ PropTypes for type safety
Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
};

export default Button;
