import React, { Component } from 'react';
import arrowDown from '../../assets/icons/arrow-drop-down.svg';
import './dropDown.scss';
export default class DropDown extends Component {
  state = {
    isShowing: false,
  }

  toggleMenu = () => this.setState({ isShowing: !this.state.isShowing})

  render(){
    const { isShowing } = this.state;
    const { handler } = this.props;

    return(
      <div className="drop-down" tabIndex={0} onClick={this.toggleMenu}>
        <img src={ arrowDown } alt="arrow down"/>
        {isShowing && (
          <ul className="drop-down__menu" >
            <li tabIndex={0}>Move to...</li>
            <li tabIndex={0} onClick={ ()=>handler('currentlyReading') }>Currently Reading</li>
            <li tabIndex={0} onClick={ ()=>handler('wantToRead') }>Want to Read</li>
            <li tabIndex={0} onClick={ ()=>handler('read') }>Read</li>
            {/* removing none option as the API doesnt support it */}
            {/* <li tabIndex={0} onClick={ ()=>handler('remove') }>None</li> */}
          </ul>
        )}
      </div>
    );
  }
}