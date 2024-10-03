import React from "react";

interface ToDoProps {
  title: string;
  description: string;
  status: string;
}

const ToDo: React.FC<ToDoProps> = (props) => {
  return (
    <div>
      <h2 style={{color:"red"}}><span style={{color :"yellow"}}>task: </span>{props.title}</h2>
      <h4>{props.description}</h4>
      <h4>{props.status}</h4>
    </div>
  );
};

export default ToDo;

