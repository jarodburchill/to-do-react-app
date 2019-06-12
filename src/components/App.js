import React, {useState} from 'react';
import Form from './Form';
import List from './List';
import style from './App.module.css';

const App = () => {
  return (
    <div className={style.app}>
      <h1 className={style.title}>To-Do List</h1>
      <Form />
      <List />
    </div>
  );
}

export default App;
