import React, { useContext } from "react";
import { TaskListContext } from "./context/TaskListContext";

import GlobalWrapper from "./components/GlobalWrapper";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import TodoContainer from "./components/TodoContainer";
import InputSection from "./components/InputSection";
import Line from "./components/Line";
import ListTasks from "./components/ListTasks";
import Task from "./components/Task";

const App = () => {
  const { tasks } = useContext(TaskListContext);
  console.log(tasks);
  return (
    <GlobalWrapper>
      <Header />
      <MainContainer>
        <TodoContainer>
          <InputSection />
          <Line />
          {tasks.length ? (
            <ListTasks>
              {tasks.map((task, index) => (
                <Task task={task} key={index} />
              ))}
            </ListTasks>
          ) : (
            <ListTasks center>No tasks for now... </ListTasks>
          )}
        </TodoContainer>
      </MainContainer>
    </GlobalWrapper>
  );
};

export default App;
