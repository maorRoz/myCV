import React, { Component } from 'react';
import './Details.css';
import DetailsLine from './DetailsLine';
import { lines } from './details.json';

class DetailsContainer extends Component {
  containerLines(){
    return lines.map((line, index) => <DetailsLine details={line.details} key={index}/>);
  }

  render() {
    return (
      <div className='Details-container'>
        {this.containerLines()}
      </div>
    );
  }
}


export default DetailsContainer;
