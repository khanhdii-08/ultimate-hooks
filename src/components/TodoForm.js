import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ThemeContext } from "../contexts/ThemeContext";
import { TodoContext } from "../contexts/TodoContext";
import { ADD_TODO } from "../reducers/types";
const TodoForm = () => {
  const [title, setTitle] = useState("");

  const { theme } = useContext(ThemeContext);

  const { isLightTheme, light, dark } = theme;

  const style = isLightTheme ? light : dark;

  const { dispatch } = useContext(TodoContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: ADD_TODO,
      payload: {
        todo: {
          id: uuidv4(),
          title,
        },
      },
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
