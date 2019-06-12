import React, {useState} from 'react';
import Form from './Form';
import List from './List';
import style from './App.module.css';

const App = () => {
  const [update, setUpdate] = useState(false);

  return (
    <div className={style.app}>
      <h1 className={style.title}>To-Do List</h1>
      <Form setUpdate={setUpdate} />
      <List update={update} setUpdate={setUpdate} />
    </div>
  );
}

export default App;
