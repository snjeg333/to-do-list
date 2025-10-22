import { Form } from "../components/Form/Form";
import { ToDoList } from "../components/ToDoList/ToDoList";
import { ToDo } from "../models/todo-item";
import { ToastContainer, toast } from "react-toastify";
import { RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { createAction, deleteAction, updateAction } from "../feature/todoList";

export const ToDoListPage = () => {
  const todoList = useSelector((state: RootState) => state.todoList.todos);
  const dispatch = useDispatch();

  const notifyAdd = () => toast.success("Новая задача добавлена!");
  const notifyUpdate = () => toast.info("Задача обновлена!");
  const notifyDelete = () => toast.warn("Задача удалена!");

  const createNewToDo = (text: string) => {
    dispatch(createAction(text));
    notifyAdd();
  };

  const updateToDo = (toDoItem: ToDo) => {
    dispatch(updateAction(toDoItem));
    notifyUpdate();
  };

  const deleteToDo = (toDoItem: ToDo) => {
    dispatch(deleteAction(toDoItem));
    notifyDelete();
  };

  return (
    <>
      <Form createNewToDo={createNewToDo} />
      <ToDoList
        todos={todoList}
        updateToDo={updateToDo}
        deleteToDo={deleteToDo}
      />
      <ToastContainer position="bottom-right" />
    </>
  );
};
