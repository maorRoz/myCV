import React, { Component } from 'react';
import './Exprience.css';
import { positions } from './positions.json';
import BodyHeader from '../BodyHeader';

class Position extends Component {
  render(){
    const { name, field, title, startDate, endDate, description } = this.props.data;
    const descriptionLines = description
      .map((line, index) => <div dangerouslySetInnerHTML={{ __html: line }} key={index}/>);

    return(
      <div className='Position'>
        <div className='Position-title'>{name} ({field}) - {title}</div>
        <div className='Position-dates'>{startDate} - {endDate}</div>
        {descriptionLines}


      </div>
    );
  }
}

class Exprience extends Component {
  positions(){
    return positions.map((position, index) => <Position data={position} key={index}/>);
  }

  render() {
    return (
      <div>
        <BodyHeader text='Work Exprience'/>
        {this.positions()}
      </div>
    );
  }
}

export default Exprience;
