import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTaskSlice } from "../../redux/slice";
import { TodoBtn, TodoInput } from "./Forms.styled";

interface EditTodoFormProps {
  task: { task: string; id: string };
}

export const EditTodoForm = ({ task: { task, id } }: EditTodoFormProps) => {
  const [value, setValue] = useState(task);

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(editTaskSlice({ value, id }));
  };

  return (
    <li>
      <form onSubmit={handleSubmit}>
        <TodoInput
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          name="input"
          placeholder="Update task"
        />
        <TodoBtn type="submit">Upgrade</TodoBtn>
      </form>
    </li>
  );
};
