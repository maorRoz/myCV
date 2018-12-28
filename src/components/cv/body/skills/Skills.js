import React, { Component } from 'react';
import './Skills.css';
import BodyHeader from '../BodyHeader';
import { skills } from './skills.json';

const MAX_STARS = 5;

const createStarArray = (length, className) => {
  const starArray = [];
  for(let i = 0; i < length; i += 1){
    starArray.push(<span className={className} key={i}>&#10026;</span>);
  }
  return starArray;
};

const SkillLine = (props) => {
  const { name, addition, level } = props.data;
  const greenStars = createStarArray(level, 'Skill-green-star');
  const greyStars = createStarArray(MAX_STARS - level, 'Skill-grey-star');
  return(
    <div className='Skill-item'>
      {name} { addition ? `(${addition})` : ''}
      <span className='Skill-item-stars'>{greenStars}{greyStars}</span>
    </div>
  );
};

const SkillBoard = (props) => {
  const { skillsList } = props;
  const skillLines = skillsList
    .map((skill, index) => <SkillLine data={skill} key={index}/>);
  return(
    <div className='Skill-board'>
      {skillLines}
    </div>
  );
};

class Skills extends Component {
  assignSkillsToBoards(){
    const { length } = skills;
    return { leftSkills: skills.slice(0, length / 2), rightSkills : skills.slice(length / 2) };
  }

  render() {
    const { leftSkills, rightSkills } = this.assignSkillsToBoards();
    return (
      <div>
        <BodyHeader text='Skills'/>
        <SkillBoard skillsList={leftSkills}/>
        <SkillBoard skillsList={rightSkills}/>
      </div>
    );
  }
}

export default Skills;
