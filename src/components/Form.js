import React, {useState} from 'react';
import style from './Form.module.css';

const Form = (props) => {
  const [taskName, setTaskName] = useState("");

  const txtTaskName_OnChange = e => {
    setTaskName(e.target.value);
  }

  const frmAddTask_OnSubmit = e => {
    e.preventDefault();
    if (localStorage.getItem("tasks") === null) {
      localStorage.setItem("tasks", taskName);
    }
    else {
      const tasks = localStorage.getItem("tasks");
      const taskArray = (tasks.split("::"));
      taskArray.push(taskName)
      localStorage.setItem("tasks", taskArray.join("::"));
    }
    setTaskName("");
    props.setUpdate(true);
  }

  return (
    <form id="frmAddTask" name="frmAddTask" 
      onSubmit={frmAddTask_OnSubmit} className={style.form}>
      <input
        id="txtTaskName"
        type="text"
        placeholder="task name"
        value={taskName}
        onChange={txtTaskName_OnChange}
        className={style.textbox}
        required
      />
      <button
        id="btnAdd"
        name="btnAdd"
        type="submit"
        className={style.button}>
        Add
      </button>
    </form>
  );
}

export default Form;
