import React, { useState, Fragment } from 'react';
import classes from './Board.module.css';
import Square from './Square';

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);

  const handleClick = (i) => {

    if(winningCombination(squares) || squares[i]) {
      return
    }

    squares[i] = isX ? 'X' : 'O';
    setSquares(squares);
    setIsX(!isX);

  }

  const winningCombination = squares => {
    const allPossibleWinningPatters = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

  //Now to loop over winning patterns after every player's move:
  for(let i = 0; i < allPossibleWinningPatters.length; i++) {
    const [a, b, c] = allPossibleWinningPatters[i];

    if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a]
    }
  }
  return null

  }

  const winner = winningCombination(squares);
  let currentStatus;

  if(winner) {
    currentStatus = `Winner is: ${winner}`
  } else {
    currentStatus = `Next Player is: ${isX ? 'X' : 'O'}`
  };

  const restartGame = () => {
    setIsX(true)
    setSquares(Array(9).fill(null))
  }

  return (
    <Fragment>
    <div className={classes.TTT__container}>
      <div className={classes.TTT__name}>Tic - Tac - Toe</div>
      <div className={classes.board}>
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
      <div className={classes.gameStatus}>{currentStatus}</div>
      <button onClick={restartGame} className={classes.restartTicTacToe}>Play Again!</button>
      </div>
    </Fragment>
  )
}

export default Board