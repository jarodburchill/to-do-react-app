import React from 'react';
import style from './Task.module.css';

const Task = (props) => {
  const divTask_OnClick = e => {
    e.preventDefault();
    const updatedTaskArray = props.taskArray;
    updatedTaskArray.splice(props.index, 1);
    if (updatedTaskArray.length === 0) {
      localStorage.removeItem("tasks");
    }
    else {
      localStorage.setItem("tasks", (updatedTaskArray.join("::")));
    }
    props.setUpdate(true);
  }

  return (
    <div className={style.container}>
      <div id="divTask" className={style.task} onClick={divTask_OnClick}>
        <h2>{props.taskName}</h2>
      </div>
    </div>
  );
}

export default Task;