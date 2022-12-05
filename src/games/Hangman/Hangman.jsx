import React, { useState, useEffect } from 'react';
import Figure from './HangmanFiles/Figure';
import WrongLetters from './HangmanFiles/WrongLetters';
import Word from './HangmanFiles/Word';
import Popup from './HangmanFiles/Popup';
import { showNotification as show, checkWin } from './helpers/helpers';
import classes from './Hangman.module.css';

const words = ['potato', 'tomato', 'cucumber', 'radish', 'corn', 'carrot', 'onion', 'celery', 'garlic', 'peas', 'eggplant'];
let selectedWord = words[Math.floor(Math.random() * words.length)];

const Hangman = () => {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleKeydown = event => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    }
    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  function playAgain() {
    setPlayable(true);

    // Empty Arrays
    setCorrectLetters([]);
    setWrongLetters([]);

    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

  return (
    <>
    <div className={classes.all__wrapper}>
      <div className={classes.game__container}>
        <div className={classes.hangman__title}>Hangman</div>
        <p style={{textAlign: 'center', paddingTop: '.2em', fontSize: '1.7rem', fontFamily: 'Londrina Outline, cursive', fontWeight: 700, }}>topic: vegetables</p>
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
        <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain} />
      </div>
      </div>
    </>
  );
}

export default Hangman;
