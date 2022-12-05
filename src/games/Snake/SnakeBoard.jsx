import React, { useState, useEffect, useRef } from 'react';
import Blank from './imgs/blank.png';
import Snake from './imgs/snake.png';
import Food  from './imgs/food.png';
import classes from './SnakeBoard.module.css'

const SnakeBoard = () => {


const width=15;
const height=15;    
let initialRows = [];
for(let i=0; i<height; i++) {
    initialRows.push([]);
    for(let k=0; k<width; k++) {
        initialRows[i].push('blank');
    }
}


const randomPosition = () => {
    const position = {
        x: Math.floor(Math.random()*width),
        y: Math.floor(Math.random()*height)};
    return position;    
}

const [rows, setRows] = useState(initialRows);
const [snake, setSnake] = useState([{x:0,y:0},{x:1,y:0}]);
const [direction, setDirection] = useState('right');
const [food, setFood] = useState(randomPosition);



const changeDirectionWithKeys = (e) => {
    var { keyCode } = e;
      switch(keyCode) {
        case 100:
                setDirection('left');
                break;
        case 104:
                setDirection('top');
                break;                   
        case 102:
              setDirection('right');
              break;
        case 92:
              setDirection('bottom');
              break;
        default:
            break;            
          }
    }
    
  document.addEventListener("keydown", changeDirectionWithKeys, false);

const displaySnake = () => {
    const newRows = initialRows;
    snake.forEach(cell => {
     newRows[cell.x][cell.y]='snake';
    })
    newRows[food.x][food.y]='food';
    setRows(newRows);
}


const moveSnake = () => {
    const newSnake = [];
    switch(direction) {
        case 'right':
            newSnake.push({x: snake[0].x, y: (snake[0].y + 1)%width})
            break;
        case 'left':
            newSnake.push({x: snake[0].x, y: (snake[0].y - 1 + width)%width})
            break;
        case 'top':
            newSnake.push({x: (snake[0].x - 1 + height)%height, y: snake[0].y})
            break;
        case 'bottom':
            newSnake.push({x: (snake[0].x + 1)%height, y: snake[0].y});
            break;
        default: console.log('it is what it is');
        break;
    }
        snake.forEach(cell=> {
            newSnake.push(cell);
        })    
    if(snake[0].x === food.x && snake[0].y === food.y) {
        setFood(randomPosition);
    }else {
        newSnake.pop();
    }
    setSnake(newSnake);
    displaySnake();
}


useInterval(moveSnake, 100);

function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }


const displayRows = rows.map(row => 
    <li>
        {row.map(e => {
            switch(e) {
                case 'blank':
                   return <img alt='blank icon' src={Blank}/>
                case 'snake':
                   return <img alt='snake icon' src={Snake}/>
                case 'food':
                    return <img alt='food icon' src={Food}/>     
                default: console.log('it is what it is'); 
                      }
                 })
        }
    </li>
    );
return (
    <div>
        <div style={{textAlign: 'center',
        fontFamily: 'Londrina Outline, cursive',
        fontWeight: 900,
        fontSize: '3rem'}}>Snake Game</div>
        <ul className={classes.board}>
        { displayRows }
        </ul>
        <p style={{textAlign: 'center', marginTop: '10px', fontSize: '1.8rem', marginBottom: '10em', fontFamily: 'Londrina Outline, cursive', fontWeight: 900}}>play with numpad 2 , 4 , 6 , 8</p>
    </div>
)
}

export default SnakeBoard;