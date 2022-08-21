import React from "react";
import "./App.css";
import ThoughtList from "./components/thoughtlist/ThoughtList";
import TodoList from "./components/todolist/TodoList";
import { Container } from "@mui/system";

function App() {
  return (
    <Container
      disableGutters
      maxWidth="false"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <ThoughtList />
      <TodoList />
    </Container>
  );
}

export default App;
