import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { TodoContext } from "../contexts/TodoContext";

const TodoItem = ({ todo }) => {
  //   const todo = props.todo;

  const { theme } = useContext(ThemeContext);

  const { isLightTheme, light, dark } = theme;

  const style = isLightTheme ? light : dark;
  const { deleteTodo } = useContext(TodoContext);

  return (
    <li
      style={style}
      onClick={() => {
        deleteTodo(todo.id);
      }}
    >
      {todo.title}
    </li>
  );
};

export default TodoItem;
