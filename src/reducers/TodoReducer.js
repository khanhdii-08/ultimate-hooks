import { GET_TODOS, SAVE_TODOS, DELETE_TODO, ADD_TODO } from "./types";

export const todoReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_TODOS:
      console.log("get todos");
      const todos = localStorage.getItem("todos");
      if (todos) state = JSON.parse(todos);
      return state;

    case SAVE_TODOS:
      console.log("set todo ");
      localStorage.setItem("todos", JSON.stringify(payload.todos));
      return state;

    case ADD_TODO:
      return [...state, payload.todo];

    case DELETE_TODO:
      return state.filter((todo) => todo.id !== payload.id);

    default:
      return state;
  }
};
