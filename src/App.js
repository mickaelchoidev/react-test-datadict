import React, { useContext } from "react";

import { TaskListContext } from "./context/TaskListContext";

import GlobalWrapper from "./components/GlobalWrapper/GlobalWrapper";
import Header from "./components/Header/Header";
import MainContainer from "./components/MainContainer/MainContainer";
import TodoContainer from "./components/TodoContainer/TodoContainer";
import InputSection from "./components/InputSection/InputSection";
import Line from "./components/Line/Line";
import ListTasks from "./components/ListTasks/ListTasks";
import Task from "./components/Task/Task";

const App = () => {
  const { tasks } = useContext(TaskListContext);

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
