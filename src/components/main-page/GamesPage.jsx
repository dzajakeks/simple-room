import React, { useState, Fragment } from 'react';
import classes from './GamesPage.module.css';
import RPS from '../../games/RockPaperScissors/RPS';
import TicTacToe from '../../games/TicTacToe/TicTacToe';
import SnakeGame from '../../games/Snake/SnakeGame';
import Hangman from '../../games/Hangman/Hangman';



const GamesPage = () => {

  const [loadBlack, setLoadBlack] = useState(true);
  const removeBlack = () => {
    setLoadBlack(false);
  }
  return (
    <Fragment>
      <div className={classes.main__page__cont}>
        <header className={classes.header__content}>
          {loadBlack && <div onAnimationEnd={removeBlack} className={classes.blackbitch}></div>}
          <div className={classes.sudoku__container}></div>
          <div className={classes.main__text}>
            <p className={classes.classic__text}>Simple Room</p>
            <p className={classes.classic__press__button}>just a classic page with classic simple games!</p>
          </div>
          <div className={classes.dice__container}></div>
        </header> 
      </div>
      <main>
        <RPS />
        <TicTacToe />
        <SnakeGame />
        <Hangman />
      </main>
    </Fragment>
  )
}

export default GamesPage