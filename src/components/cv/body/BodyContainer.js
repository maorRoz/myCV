import React, { Component } from 'react';
import './Body.css';
import Profile from './profile/Profile';
import Skills from './skills/Skills';
import Exprience from './exprience/Exprience';
import Education from './education/Education';
import Military from './military/Military';


class BodyContainer extends Component {
  render() {
    return (
      <div className='Body'>
        <Profile/>
        <Exprience/>
        <Skills/>
        <Education/>
        <Military/>
      </div>
    );
  }
}

export default BodyContainer;
