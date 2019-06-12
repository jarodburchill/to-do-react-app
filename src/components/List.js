import React, {useState, useEffect} from 'react';
import Task from './Task';

const List = () => {
  const [taskArray, setTaskArray] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("tasks") !== null) {
      const tasks = localStorage.getItem("tasks");
      setTaskArray((tasks.substring(0, tasks.length - 2)).split("::"));
    }
  }, []);

  return (
    <div>
      {taskArray.map((item, index) => (
        <Task key={index} taskName={item} taskArray={taskArray} setTaskArray={setTaskArray}/>
      ))}
    </div>
  );
}

export default List;