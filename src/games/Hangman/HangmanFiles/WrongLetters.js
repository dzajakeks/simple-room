import React from 'react';
import classes from '../Hangman.module.css';


const WrongLetters = ({ wrongLetters }) => {

  return (
    <div className={classes.wrong__letters__container}>
      <div>
        {wrongLetters.length > 0 && 
          <p style={{fontSize: '1.8rem', fontFamily: 'Londrina Outline, cursive', fontWeight: 900}}>Wrong Letters:</p>
        }
        {wrongLetters
          .map((letter, i) => <span key={i}>{letter}</span>)
          .reduce((prev, curr) => prev === null ? [curr] : [prev, ', ', curr], null)}
      </div>
    </div>
  )
}

export default WrongLetters
