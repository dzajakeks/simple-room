import React, { useEffect } from 'react';
import { checkWin } from '../helpers/helpers';
import classes from '../Hangman.module.css';

const Popup = ({correctLetters, wrongLetters, selectedWord, setPlayable, playAgain}) => {
  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;

  if( checkWin(correctLetters, wrongLetters, selectedWord) === 'win' ) {
    finalMessage = 'You won!';
    playable = false;
  } else if( checkWin(correctLetters, wrongLetters, selectedWord) === 'lose' ) {
    finalMessage = 'You lost!';
    finalMessageRevealWord = `...the word was: ${selectedWord}`;
    playable = false;
  }

  useEffect(() => {
    setPlayable(playable);
  });

  return (
    <div className={classes.popup__container} style={finalMessage !== '' ? {display:'flex'} : {}}>
      <div className={classes.popup}>
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button style={{fontSize: '1.8rem', fontFamily: 'Londrina Outline, cursive', fontWeight: 900}} onClick={playAgain}>Play Again</button>
      </div>
    </div>
  )
}

export default Popup
