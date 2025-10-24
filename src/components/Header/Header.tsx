import { StyledHeader, Container, StyledNavLink } from "./Header.styles";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <StyledNavLink to="/">ToDo</StyledNavLink>
        <StyledNavLink to="/list">List</StyledNavLink>
      </Container>
    </StyledHeader>
  );
};
