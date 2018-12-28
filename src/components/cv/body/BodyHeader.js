import React, { Component } from 'react';
import './Body.css';

class BodyHeader extends Component {
  render() {
    const { text } = this.props;
    return (
      <div className='Body-header'>
        {text}
      </div>
    );
  }
}

export default BodyHeader;
