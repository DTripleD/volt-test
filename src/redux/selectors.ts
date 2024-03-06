import { store } from "./store";

type RootState = ReturnType<typeof store.getState>;

export const todoSelector = (state: RootState) => state.todo.todos;
