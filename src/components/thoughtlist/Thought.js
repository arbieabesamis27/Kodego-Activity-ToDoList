import React, { useState } from "react";
import ThoughtsForm from "./ThoughtsForm";
import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function Thought({
  thoughts,
  completeThoughts,
  removeThoughts,
  updateThoughts,
}) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateThoughts(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <ThoughtsForm edit={edit} onSubmit={submitUpdate} />;
  }

  return thoughts.map((thought, index) => (
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
      className={thought.isComplete ? "complete" : ""}
      key={index}
    >
      <Box
        sx={{
          flex: 1,
          maxWidth: "80%",
          overflowWrap: "break-word",
          mr: 1,
        }}
        key={thought.id}
        onClick={() => completeThoughts(thought.id)}
      >
        {thought.text}
      </Box>

      <Box sx={{ display: "flex" }}>
        <DeleteIcon
          cursor="pointer"
          onClick={() => removeThoughts(thought.id)}
        />
        <EditIcon
          cursor="pointer"
          onClick={() => setEdit({ id: thought.id, value: thought.text })}
        />
      </Box>
    </Box>
  ));
}

export default Thought;
