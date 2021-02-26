//display all tasks

import React from "react";
import uniqid from "uniqid";

const Overview = (props) => {
  const {tasks} = props;

  return(
    <ul>
      {tasks.map((task)=>{
        let uid = uniqid();
        return (
        <li key={uid}>
        {task}
        <button onClick={(e)=>{console.log(uid, e)}}>Delete</button>
        </li>
        );
      })}
    </ul>
  );
}

export default Overview;