import React, { Component } from 'react';
import './Details.css';

const Description = (props) => {
  const { type, data } = props;
  switch(type){
    case 'red': return <span className='Details-red'>{data}</span>;
    case 'link': return <a href={`https://${data}`}>{data}</a>;
    case 'email': return <a href={`mailto:${data}`}>{data}</a>;
    default: return data;
  }
};

const Detail = (props) => {
  const { name, description, type } = props.data;
  return(
    <div className='Details-item'>
      <label className='Details-label'>{name}:</label> <Description type={type} data={description}/>
    </div>
  );
};

class DetailsLine extends Component {
  lineDetails(details){
    return details.map((detail, index) => <Detail data={detail} key={index}/>);
  }

  render() {
    const { details } = this.props;
    return (
      <div>{this.lineDetails(details)}</div>
    );
  }
}


export default DetailsLine;
