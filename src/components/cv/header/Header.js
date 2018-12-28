import React, { Component } from 'react';
import './Header.css';
import DetailsContainer from './details/DetailsContainer';

class Header extends Component {
  render() {
    return (
      <div className='Header'>
        <div className='Header-name'>Maor Rozevich</div>
        <div className='Header-title'>Software Engineering Student, 4th year</div>
        <DetailsContainer/>
      </div>
    );
  }
}


export default Header;
