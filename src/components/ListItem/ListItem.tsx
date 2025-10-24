import { ToDo } from "../../models/todo-item";
import { StyledListItem } from "./ListItem.styles";

export const ListItem = ({ todo }: { todo: ToDo }) => {
  return (
    <StyledListItem
      $isDone={todo.isDone}
      target="_blank"
      href={`/list/${todo.id}`}
      rel="noreferrer"
    >
      {todo.text}
    </StyledListItem>
  );
};
