import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ThemeContext } from "../contexts/ThemeContext";
import { TodoContext } from "../contexts/TodoContext";
const TodoForm = () => {
  const [title, setTitle] = useState("");

  const { theme } = useContext(ThemeContext);

  const { isLightTheme, light, dark } = theme;

  const style = isLightTheme ? light : dark;

  const { addTodo } = useContext(TodoContext);

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
