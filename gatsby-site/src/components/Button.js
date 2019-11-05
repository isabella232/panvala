import React from 'react';

const Button = ({ text, handleClick }) => {
  return (
    <button
      className="f6 link dim bn br-pill white bg-teal fw7 pointer pv3 ph4"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
