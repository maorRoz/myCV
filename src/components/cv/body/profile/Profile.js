import React, { Component } from 'react';
import './Profile.css';
import BodyHeader from '../BodyHeader';
import { attributes } from './attributes.json';

const Attribute = (props) => {
  const { name, description } = props.data;
  const descriptionLines = description.map((line, index) => <div key={index}>{line}</div>);
  return (
    <div className='Profile-attribute'>
      <span className='Profile-attribute-name'>{name}</span>
      <div className='Profile-attirbute-description'>
        {descriptionLines}
      </div>
    </div>
  );
};

class Profile extends Component {
  profileAttributes(){
    return attributes.map((attribute, index) => <Attribute data={attribute} key={index}/>);
  }

  render() {
    return (
      <div>
        <BodyHeader text='Profile'/>
        {this.profileAttributes()}
      </div>
    );
  }
}

export default Profile;
