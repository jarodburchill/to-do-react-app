import React from 'react';
import Form from './Form';
import List from './List';
import style from './App.module.css';

function App() {
  return (
    <div className={style.app}>
      <h1 className={style.title}>To-Do List</h1>
      <Form />
      <List />
    </div>
  );
}

export default App;
