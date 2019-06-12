import React from 'react';
import style from './Task.module.css';

const Task = (props) => {
  const divTask_OnClick = e => {
    e.preventDefault();
    const updatedTaskArray = props.taskArray;
    updatedTaskArray.splice(props.index, 1);
    localStorage.setItem("tasks", (updatedTaskArray.join("::") + "::"));
    if (localStorage.getItem("tasks") === "::") {
      localStorage.removeItem("tasks");
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