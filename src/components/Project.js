import React from 'react';
import Button from 'react-bootstrap/Button';

function Project(props) {
  return (
    <div>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <Button href={props.deployedLink} variant="primary">View App</Button>{' '}
      <Button href={props.githubLink} variant="secondary">View Code</Button>
    </div>
  );
}

export default Project;
