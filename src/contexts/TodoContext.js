import { createContext, useEffect, useReducer } from "react";
import { todoReducer } from "../reducers/TodoReducer";
import {
  ADD_TODO,
  DELETE_TODO,
  GET_TODOS,
  SAVE_TODOS,
} from "../reducers/types";

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  useEffect(() => {
    dispatch({
      type: GET_TODOS,
      payload: null,
    });
  }, []);

  useEffect(() => {
    dispatch({
      type: SAVE_TODOS,
      payload: { todos },
    });
  }, [todos]);

  const TodoContextData = {
    todos,
    dispatch,
  };

  return (
    <TodoContext.Provider value={TodoContextData}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
