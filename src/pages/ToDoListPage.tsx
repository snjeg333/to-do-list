import { useState } from "react";
import { Form } from "../components/Form/Form";
import { ToDoList } from "../components/ToDoList/ToDoList";
import { ToDo } from "../models/todo-item";
import { ToastContainer, toast } from "react-toastify";

export const ToDoListPage = () => {
  const [todos, setTodos] = useState<ToDo[]>([]);

  const notifyAdd = () => toast.success("Новая задача добавлена!");
  const notifyUpdate = () => toast.info("Задача обновлена!");
  const notifyDelete = () => toast.warn("Задача удалена!");

  const createNewToDo = (text: string) => {
    const newToDo: ToDo = {
      id: todos.length,
      text: text,
      isDone: false,
    };
    setTodos([...todos, newToDo]);
    notifyAdd();
  };

  const updateToDo = (toDoItem: ToDo) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === toDoItem.id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    setTodos(newTodos);
    notifyUpdate();
  };

  const deleteToDo = (toDoItem: ToDo) => {
    const newTodos = todos.filter((todo) => todo.id !== toDoItem.id);
    setTodos(newTodos);
    notifyDelete();
  };

  return (
    <>
      <Form createNewToDo={createNewToDo} />
      <ToDoList todos={todos} updateToDo={updateToDo} deleteToDo={deleteToDo} />
      <ToastContainer position="bottom-right" />
    </>
  );
};
