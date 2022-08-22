import React, { useState, useEffect } from "react";
import ThoughtsForm from "./ThoughtsForm";
import Thought from "./Thought";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

function ThoughtList() {
  const localThoughtList = localStorage.getItem("thoughts");
  const thoughtsInfo = localThoughtList ? JSON.parse(localThoughtList) : [];
  const [thoughts, setThoughts] = useState(thoughtsInfo);

  const addTodo = (thought) => {
    if (!thought.text || /^\s*$/.test(thought.text)) {
      return;
    }

    const newThoughts = [thought, ...thoughts];

    setThoughts(newThoughts);
  };

  useEffect(() => {
    localStorage.setItem("thoughts", JSON.stringify(thoughts));
    console.log(thoughts);
  }, [thoughts]);

  const updateThoughts = (thoughtId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setThoughts((prev) =>
      prev.map((item) => (item.id === thoughtId ? newValue : item))
    );
  };

  const removeThoughts = (id) => {
    const removeArr = [...thoughts].filter((thought) => thought.id !== id);

    setThoughts(removeArr);
  };

  const completeThoughts = (id) => {
    let updatedThoughts = thoughts.map((thought) => {
      if (thought.id === id) {
        thought.isComplete = !thought.isComplete;
      }
      return thought;
    });
    setThoughts(updatedThoughts);
  };

  return (
    <Box sx={{ p: 5, flex: 1, minWidth: 400 }}>
      <Typography
        variant="h6"
        align="center"
        sx={{ fontWeight: 700, color: "black", m: 2 }}
      >
        What's your Thoughts Today?
      </Typography>
      <ThoughtsForm onSubmit={addTodo} />
      <Thought
        thoughts={thoughts}
        completeThoughts={completeThoughts}
        removeThoughts={removeThoughts}
        updateThoughts={updateThoughts}
      />
    </Box>
  );
}

export default ThoughtList;
