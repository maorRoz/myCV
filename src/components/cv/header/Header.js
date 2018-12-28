import React, { Component } from 'react';
import './Header.css';
import DetailsContainer from './details/DetailsContainer';

class Header extends Component {
  render() {
    return (
      <div className='Header'>
        <div className='Header-title'>Maor Rozevich</div>
        <div className='Header-main-line'>Software Engineering Student, 4th year</div>
        <DetailsContainer/>
      </div>
    );
  }
}


export default Header;
