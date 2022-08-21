import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#42a5f5",
        borderRadius: 1,
        cursor: "pointer",
        p: 1.5,
        mb: 2,
      }}
      className={todo.isComplete ? "complete" : ""}
      key={index}
    >
      <Box
        sx={{ flex: 1, maxWidth: "80%", overflowWrap: "break-word", mr: 1 }}
        key={todo.id}
        onClick={() => completeTodo(todo.id)}
      >
        {todo.text}
      </Box>

      <Box sx={{ display: "flex" }}>
        <DeleteIcon cursor="pointer" onClick={() => removeTodo(todo.id)} />
        <EditIcon
          cursor="pointer"
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
        />
      </Box>
    </Box>
  ));
}

export default Todo;
