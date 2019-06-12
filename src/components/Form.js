import React, {useState} from 'react';
import style from './Form.module.css';
import { tsPropertySignature } from '@babel/types';

const Form = () => {
  const [taskName, setTaskName] = useState("");

  const txtTaskName_OnChange = e => {
    setTaskName(e.target.value);
    console.log(taskName);
  }

  const frmAddTask_OnSubmit = e => {
    e.preventDefault();
    console.log(taskName);
    if (localStorage.getItem("tasks") === null) {
      localStorage.setItem("tasks", "");
    }
    const tasks = localStorage.getItem("tasks");
    localStorage.setItem("tasks", tasks + taskName + "::");
    setTaskName("");
  }

  return (
    <form id="frmAddTask" name="frmAddTask" 
      onSubmit={frmAddTask_OnSubmit} className={style.form}>
      <input
        id="txtTaskName"
        name="txtTaskName"
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
