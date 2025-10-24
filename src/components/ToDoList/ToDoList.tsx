import { ToDoListItem } from "./ToDoListItem/ToDoListItem";
import { TodoContainer, TodoList } from "./ToDoList.styles";
import { ToDo } from "../../models/todo-item";

export const ToDoList = (props: {
  todos: ToDo[];
  updateToDo: Function;
  deleteToDo: Function;
}) => {
  const checkedList = () => {
    return props.todos
      .filter((item) => !item.isDone)
      .map((item, idx) => {
        return (
          <ToDoListItem
            toDoItem={item}
            key={idx}
            updateToDo={props.updateToDo}
            deleteToDo={props.deleteToDo}
          />
        );
      });
  };

  const uncheckedList = () => {
    return props.todos
      .filter((item) => item.isDone)
      .map((item, idx) => {
        return (
          <ToDoListItem
            toDoItem={item}
            key={idx}
            updateToDo={props.updateToDo}
            deleteToDo={props.deleteToDo}
          />
        );
      });
  };

  return (
    <TodoContainer>
      <TodoList $type="failed">{checkedList()}</TodoList>
      <TodoList $type="completed">{uncheckedList()}</TodoList>
    </TodoContainer>
  );
};
