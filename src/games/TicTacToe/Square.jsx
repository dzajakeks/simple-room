import React from 'react';

const Square = ({value, onClick}) => {


  return (
    <div style={{
      outline: '1px solid black', 
      width: '100px', height: '100px', 
      display: 'grid', 
      placeContent: 'center', 
      fontSize: '3rem', 
      fontFamily: 'Londrina Outline, cursive', 
      fontWeight: '900',
      cursor: 'pointer'
      }} onClick={onClick}>{value}</div>
  )
}

export default Square;