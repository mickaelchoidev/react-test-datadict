import React, { useContext } from "react";
import styled from "styled-components";
import { TaskListContext } from "../../context/TaskListContext";
import Button from "../Button/Button";

const TaskContainer = styled.div`
  margin-bottom: 1px;
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
