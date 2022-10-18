import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const style = {
    background: "rgb(240, 240, 240)",
    color: "black",
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo({
      id: uuidv4(),
      title,
    });

    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Enter a new todo... "
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input type="submit" value="Add" style={style} />
    </form>
  );
};

export default TodoForm;
