import React from 'react';
import style from './Form.module.css';

function Form() {
  return (
    <>
      <form className={style.form}>
        <input
          type="text"
          placeholder="task name"
          className={style.textbox}
        />
        <button type="submit" className={style.button}>Add</button>
      </form>
    </>
  );
}

export default Form;
