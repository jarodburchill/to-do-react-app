import React, {useState, useEffect} from 'react';
import Task from './Task';
import style from './List.module.css';

const List = () => {
  const [taskArray, setTaskArray] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("tasks") !== null) {
      const tasks = localStorage.getItem("tasks");
      setTaskArray((tasks.substring(0, tasks.length - 2)).split("::"));
      console.log(taskArray);
    }
  }, []);

  return (
    <div>
      {taskArray.map(item => (
        <Task taskName={item} />
      ))}
    </div>
  );
}

export default List;