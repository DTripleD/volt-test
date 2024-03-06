import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

import { v4 as uuidv4 } from "uuid";

const initialState = {
  todos: [{ id: uuidv4(), task: "", completed: false, isEditing: false }],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,

  reducers: {
    setTodo: (state, action) => {
      state.todos = [
        ...state.todos,
        {
          id: uuidv4(),
          task: action.payload,
          completed: false,
          isEditing: false,
        },
      ];
    },
    toggleCompleteSlice: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
    deleteTodoSlice: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodoSlice: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isEditing: !todo.isEditing }
          : todo
      );
    },
    editTaskSlice: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, task: action.payload.value, isEditing: !todo.isEditing }
          : todo
      );
    },
  },
});

export const todoReducer = todoSlice.reducer;
export const {
  setTodo,
  toggleCompleteSlice,
  deleteTodoSlice,
  editTodoSlice,
  editTaskSlice,
} = todoSlice.actions;

const todoPersistConfig = {
  key: "todo",
  storage,
};
export const persistedTodoReducer = persistReducer(
  todoPersistConfig,
  todoReducer
);
