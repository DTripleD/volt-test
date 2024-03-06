import { useState } from "react";
import { useDispatch } from "react-redux";
import { setTodo } from "../../redux/slice";
import { TodoBtn, TodoInput } from "./Forms.styled";

export const TodoForm = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value) {
      dispatch(setTodo(value));
      setValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <TodoInput
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="What is the task today?"
      />
      <TodoBtn type="submit">Add Task</TodoBtn>
    </form>
  );
};
