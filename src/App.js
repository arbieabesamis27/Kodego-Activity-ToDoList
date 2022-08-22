import React, { useState } from "react";
import "./App.css";
import ThoughtList from "./components/thoughtlist/ThoughtList";
import TodoList from "./components/todolist/TodoList";
import { Container } from "@mui/system";
import { ButtonGroup, Button } from "@mui/material";

function App() {
  const [isThoughtShown, setThoughtShown] = useState(false);
  const [isTaskShown, setTaskShown] = useState(false);

  const displayThoughts = (event) => {
    event.preventDefault();
    setThoughtShown((current) => !current);
  };
  const displayTask = (event) => {
    event.preventDefault();
    setTaskShown((current) => !current);
  };
  return (
    <Container
      disableGutters
      maxWidth="false"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        maxWidth: 500,
        // height: "100vh",
      }}
    >
      <ButtonGroup
        sx={{
          display: "flex",
          justifyContent: "center",
          boxShadow: "none",
          p: 5,
        }}
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button sx={{ background: "#ab47bc" }} onClick={displayThoughts}>
          Thoughts
        </Button>
        <Button sx={{ background: "#ab47bc" }} onClick={displayTask}>
          Task
        </Button>
      </ButtonGroup>
      {isThoughtShown && <div></div>}
      {isThoughtShown && <ThoughtList />}
      {isTaskShown && <div></div>}
      {isTaskShown && <TodoList />}
    </Container>
  );
}

export default App;
