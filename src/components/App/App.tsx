import { useSelector } from "react-redux";
import { todoSelector } from "../../redux/selectors";
import { TodoForm } from "../Forms/TodoForm";
import { EditTodoForm } from "../Forms/EditTodoForm";
import { Todo } from "../Todo/Todo";
import Filter from "../Filter/Filter";
import { useState } from "react";
import { TodoList, TodoWrapper } from "./App.styled";

function App() {
  const todos = useSelector(todoSelector);

  const [status, setStatus] = useState("All");

  const getFilteredTodos = (
    array: {
      completed: boolean;
      id: string;
      isEditing: boolean;
      task: string;
    }[],
    filter: string
  ) => {
    if (filter === "Completed") {
      return array.filter((todo) => todo.completed === true);
    }

    if (filter === "Current") {
      return array.filter((todo) => todo.completed === false);
    }

    return todos;
  };

  const filteredTodos = getFilteredTodos(todos, status);

  return (
    <TodoWrapper>
      <h1>ToDo list</h1>
      <TodoForm />
      <Filter status={status} setStatus={setStatus} />
      <TodoList>
        {filteredTodos.map((todo) =>
          todo.isEditing ? (
            <EditTodoForm task={todo} key={todo.id} />
          ) : (
            <Todo task={todo} key={todo.id} />
          )
        )}
      </TodoList>
    </TodoWrapper>
  );
}

export default App;
