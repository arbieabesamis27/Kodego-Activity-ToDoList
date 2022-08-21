import React, { useState, useEffect, useRef } from "react";
import { TextField, Button } from "@mui/material";
import { Box } from "@mui/system";

function ThoughtsForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      {props.edit ? (
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <TextField
            sx={{ flex: 1, mr: 1 }}
            id="outlined-basic"
            label="Edit your thoughts"
            variant="outlined"
            placeholder="What's your thoughts?"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
          />
          <Button variant="contained" onClick={handleSubmit}>
            edit
          </Button>
        </Box>
      ) : (
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
          <TextField
            sx={{ flex: 1, mr: 1 }}
            id="outlined-basic"
            label="Thoughts"
            variant="outlined"
            placeholder="What's your thoughts?"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
          />
          <Button variant="contained" color="success" onClick={handleSubmit}>
            Add
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default ThoughtsForm;
