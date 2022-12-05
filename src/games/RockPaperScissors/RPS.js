import classes from './RPS.module.css';
import React, { Fragment, useState, useEffect } from 'react';
import { FaHandRock, FaHandPaper, FaHandScissors } from 'react-icons/fa';


const RPS = () => {
  const options = ['Rock', 'Paper', 'Scissors'];
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  useEffect(() => {
      switch(userChoice + computerChoice) {
        case 'RockScissors':
        case 'PaperRock':
        case 'ScissorsPaper':
          setResult("You WIN");
          break;
        case 'PaperScissors':
        case 'RockPaper':
        case 'ScissorsRock':
          setResult("You LOSE");
          break;
        case 'RockRock':
        case 'PaperPaper':
        case 'ScissorsScissors':
          setResult("It's a TIE")
          break;
      }
  }, [userChoice, computerChoice])


  const computerOptionHandler = () => {
    const randomCompChoice = options[Math.floor(Math.random() * options.length)]
    setComputerChoice(randomCompChoice);
  }
  const userChoiceHandler = (value) => {
    setUserChoice(value)
    computerOptionHandler();
}

  return (
    <Fragment>
      <div className={classes.rps__container}>
        <p className={classes.rps__name}>Rock - Paper - Scissors</p>
        <div className={classes.width__height}>
          <div className={classes.player__computer}>
            <div id='you'>You: <span>{userChoice}</span></div>
            <div id='computer'>Computer: <span>{computerChoice}</span></div>
          </div>
            <div className={classes.result__text} id='RPSText'>Result: {result}</div>
          <div className={classes.rps__buttons}>
            <button onClick={() => userChoiceHandler('Rock')}> <FaHandRock size={35}/> </button>
            <button onClick={() => userChoiceHandler('Paper')}><FaHandPaper size={35}/></button>
            <button onClick={() => userChoiceHandler('Scissors')}><FaHandScissors size={35}/></button>
          </div>
        </div>
      </div>  
    </Fragment>
  )
}
export default RPS;