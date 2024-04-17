//Button.js
import React from 'react';
import './Button.css'; // Import CSS file for styling

const Button = ({ onClick, text }) => {
  return <button className="button" onClick={onClick}>{text}</button>;
};

export default Button;