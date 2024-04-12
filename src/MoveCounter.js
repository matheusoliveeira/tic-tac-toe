import React from 'react';

const MoveCounter = ({ history, currentMove }) => {
  const xMoves = history.slice(1, currentMove + 1).filter((squares, index) => index % 2 === 0).length;
  const oMoves = history.slice(1, currentMove + 1).filter((squares, index) => index % 2 !== 0).length;

  return (
    <div className="move-counter">
      <p>X Move Count: {xMoves}</p>
      <p>O Move Count: {oMoves}</p>
    </div>
  );
};

export default MoveCounter;