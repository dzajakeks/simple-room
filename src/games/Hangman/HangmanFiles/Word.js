import React from 'react';
import classes from '../Hangman.module.css';

const Word = ({ selectedWord, correctLetters }) => {

  return (
    <div className={classes.word}>
      {selectedWord.split('').map((letter, i) => {
        return (
          <span style={{borderBottom: '3px solid #000000',
            fontSize: '25px',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '10px',
            paddingLeft: '7px',
            width: '25px',
            margin: '-30px 2px'}} key={i}>
            {correctLetters.includes(letter) ? letter : ''}
          </span>
        )
      })}
    </div>
  )
}

export default Word
