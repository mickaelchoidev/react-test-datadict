import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { TaskListContext } from "../context/TaskListContext";
import Button from "./Button";

const Form = styled.form`
  margin: 3vh 3vw;
  display: flex;
  justify-content: space-between;
`;

const Input = styled.input`
  flex: 9;
  margin-right: 2vw;
  padding: 1vh 1vw;
  border: 4px solid #79989b;
  border-radius: 5px;
  font-size: 15px;
  background-color: #f1f4f5;
  &:required {
    box-shadow: none;
  }
`;

const InputForm = () => {
  const { addTask, editTask, editItem } = useContext(TaskListContext);
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editItem) {
      addTask(title);
      setTitle("");
    } else {
      editTask(title, editItem.id);
    }
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
      console.log(editItem);
    } else {
      setTitle("");
    }
  }, [editItem]);

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="write a task"
        onChange={handleChange}
        value={title}
        required
      />
      <Button type="submit">{editItem ? "Edit Task" : "Add Task"}</Button>
    </Form>
  );
};

export default InputForm;
