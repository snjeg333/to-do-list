import { useSelector } from "react-redux";
import { ListItem } from "../components/ListItem/ListItem";
import { ToDo } from "../models/todo-item";
import { RootState } from "../store";
import { Container } from "./Container.styles";

export const ViewList = () => {
  const todoList = useSelector((state: RootState) => state.todoList.todos);
  return (
    <Container>
      {todoList.map((todo: ToDo, idx: number) => {
        return <ListItem todo={todo} key={idx} />;
      })}
    </Container>
  );
};
