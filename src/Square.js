import React from 'react';
import './Square.css';

const Square = ({ value, onSquareClick, highlight }) => {
  return (
    <button className={`square ${highlight ? 'highlight' : ''}`} onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default Square;
