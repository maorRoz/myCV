import React, { Component } from 'react';
import BodyHeader from '../BodyHeader';
import './Military.css';

class Military extends Component {
  render() {
    return (
      <div>
        <BodyHeader text='Military'/>
        <div className='Military-section'>
          <span style={{ fontWeight: 'bold' }}>2010-2013: </span>
          <span>Served as a fighter in the armored corps of IDF.</span>
        </div>
      </div>
    );
  }
}

export default Military;
