import React, { useContext } from "react";
import styled from "styled-components";
import { TaskListContext } from "../context/TaskListContext";

const TaskContainer = styled.div`
  margin: 2vh 0;
  padding: 1vh 3vw;
  color: #f1f4f5;
  background-color: #151b1b;
  display: flex;
  justify-content: space-between;
`;

const TaskName = styled.p`
  flex: 1;
  padding: 1vh 0;
  font-size: 15px;
`;

const Button = styled.button`
  margin-left: 2vw;
  padding: 1vh 2vw;
  font-size: 15px;
  border-radius: 5px;
  background-color: #f1f4f5;
  cursor: pointer;
  transition: 0.15s ease-in-out;
  &:hover {
    color: #f1f4f5;
    background-color: #79989b;
  }
`;

const Task = ({ task }) => {
  const { removeTask, findItem } = useContext(TaskListContext);
  return (
    <TaskContainer>
      <TaskName>{task.title}</TaskName>
      <Button onClick={() => findItem(task.id)}>Edit</Button>
      <Button onClick={() => removeTask(task.id)}>Delete</Button>
    </TaskContainer>
  );
};

export default Task;
