import React from 'react';
import './MUB.css'
import {BsFillArrowUpSquareFill} from 'react-icons/bs'

function MoveUpButton() {
  return (
    <button className='mupbtn' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <BsFillArrowUpSquareFill/>
    </button>
  );
}

export default MoveUpButton;
