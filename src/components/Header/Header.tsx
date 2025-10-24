import { useDispatch, useSelector } from "react-redux";
import {
  StyledHeader,
  Container,
  StyledNavLink,
  ToggleButton,
} from "./Header.styles";
import { toggleThemeAction } from "../../feature/themeList";
import { RootState } from "../../store";

export const Header = () => {
  const dispatch = useDispatch();
  const themeName = useSelector(
    (state: RootState) => state.themeList.theme.name
  );

  return (
    <StyledHeader>
      <Container>
        <StyledNavLink to="/">ToDo</StyledNavLink>
        <StyledNavLink to="/list">List</StyledNavLink>
        <ToggleButton onClick={() => dispatch(toggleThemeAction())}>
          {themeName === "light" ? "🦋" : "🦇"}
        </ToggleButton>
      </Container>
    </StyledHeader>
  );
};
