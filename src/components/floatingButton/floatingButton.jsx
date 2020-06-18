import React from 'react';
import { Link } from 'react-router-dom';
import add from '../../assets/icons/add.svg';
import './floatingButton.scss';

export default function floatingButton(){
  return(
    <Link to='/search' className="floating-button">
      <img src={add} alt="add button"/>
    </Link>
  )
}