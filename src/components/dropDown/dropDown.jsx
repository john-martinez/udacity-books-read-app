import React, { Component } from 'react';
import arrowDown from '../../assets/icons/arrow-drop-down.svg';
import './dropDown.scss';
export default class DropDown extends Component {
  state = {
    isShowing: false,
  }

  toggleMenu = () => this.setState({ isShowing: !this.state.isShowing})

  retrieveClassName = (target) => {
    return this.props.shelf === target ? 'drop-drown__item--active' : '';
  }
  render(){
    const { isShowing } = this.state;
    const { handler, shelf } = this.props;
    const { retrieveClassName } = this;

    return(
      <div className="drop-down" tabIndex={0} onClick={this.toggleMenu}>
        <img src={ arrowDown } alt="arrow down"/>
        {isShowing && (
          <ul className="drop-down__menu" >
            <li tabIndex={0}>Move to...</li>
            <li className={ retrieveClassName('currentlyReading') } tabIndex={0} onClick={ ()=>handler('currentlyReading') }>Currently Reading</li>
            <li className={ retrieveClassName('wantToRead') } tabIndex={0} onClick={ ()=>handler('wantToRead') }>Want to Read</li>
            <li className={ retrieveClassName('read') } tabIndex={0} onClick={ ()=>handler('read') }>Read</li>
          </ul>
        )}
      </div>
    );
  }
}