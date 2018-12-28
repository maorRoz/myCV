import React, { Component } from 'react';
import Header from './header/Header';
import BodyContainer from './body/BodyContainer';

class CV extends Component {
  render() {
    return (
      <div>
        <Header/>
        <BodyContainer/>
      </div>
    );
  }
}

export default CV;
