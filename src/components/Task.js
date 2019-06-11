import React from 'react';
import style from './Task.module.css';

const Task = (props) => {
  return (
    <>
      <h2>{props.taskName}</h2>
      <br></br>
    </>
  );
}

export default Task;