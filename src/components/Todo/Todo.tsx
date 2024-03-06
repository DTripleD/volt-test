import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  deleteTodoSlice,
  editTodoSlice,
  toggleCompleteSlice,
} from "../../redux/slice";
import { useDispatch } from "react-redux";
import { IconsWrapper, Item, StyledIcon, Title } from "./Todo.styled";

interface TodoProps {
  task: {
    completed: boolean;
    id: string;
    isEditing: boolean;
    task: string;
  };
}

export const Todo = ({ task }: TodoProps) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <Title
        className={`${task.completed ? "completed" : "incompleted"}`}
        data-completed={task.completed}
        onClick={() => dispatch(toggleCompleteSlice(task.id))}
      >
        {task.task}
      </Title>
      <IconsWrapper>
        <StyledIcon
          icon={faPenToSquare}
          onClick={() => dispatch(editTodoSlice(task.id))}
        />
        <StyledIcon
          icon={faTrash}
          onClick={() => dispatch(deleteTodoSlice(task.id))}
        />
      </IconsWrapper>
    </Item>
  );
};
