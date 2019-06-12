import React, {useState, useEffect} from 'react';
import Task from './Task';

const List = (props) => {
  const [taskArray, setTaskArray] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("tasks") !== null) {
      const tasks = localStorage.getItem("tasks");
      setTaskArray((tasks.substring(0, tasks.length - 2)).split("::"));
    }
    props.setUpdate(false);
  }, [props.update]);

  return (
    <div>
      {taskArray.map((item, index) => (
        <Task key={index} index={index} taskName={item} taskArray={taskArray} setUpdate={props.setUpdate}/>
      ))}
    </div>
  );
}

export default List;