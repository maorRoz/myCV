import React, { Component } from 'react';
import './Education.css';
import BodyHeader from '../BodyHeader';
import { education } from './education.json';

const EducationItem = (props) => {
  const { institution, title, warning, description } = props.data;
  return(
    <div className='Education-item'>
      <div className='Education-item-title'>
        {institution} - {title} { warning ? <span className='Education-item-title-warning'>{`(${warning})`}</span> : '' }</div>
      <div dangerouslySetInnerHTML={{ __html: description }}/>

    </div>
  );
};

class Education extends Component {
  educationsItems(){
    return education.map((item, index) => <EducationItem data={item} key={index}/>);
  }

  render() {
    return (
      <div>
        <BodyHeader text='Education'/>
        {this.educationsItems()}
      </div>
    );
  }
}

export default Education;
