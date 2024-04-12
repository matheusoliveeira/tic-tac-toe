import React from 'react';
import Square from './Square';

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: lines[i] };
    }
  }
  return { winner: null, line: null };
}

const Board = ({ xIsNext, squares, onPlay }) => {
  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares).winner) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const isDraw = (squares) => {
    return squares.every(square => square !== null);
  }

  const { winner, line } = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else if (isDraw(squares)) {
    status = "Game Result: Draw";
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return  <>
            <div className="status">{status}</div>
            <div className="board">
              {[0, 1, 2].map(row => (
                <div className="board-row" key={row}>
                  {[0, 1, 2].map(col => {
                    const index = row * 3 + col;
                    const isWinnerSquare = line && line.includes(index);
                    return (
                      <Square
                        key={col}
                        value={squares[index]}
                        onSquareClick={() => handleClick(index)}
                        highlight={isWinnerSquare}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </>;
}

export default Board;