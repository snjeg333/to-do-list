import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Theme } from "../../models/theme";

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 50px;
  background-color: #4682b4;
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  max-width: 97%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  padding: 10px;
  color: #fff;

  &.active {
    color: #ffffff33;
  }
`;

export const ToggleButton = styled.button<{ theme: Theme }>`
  font-size: 25px;
  border: none;
  cursor: pointer;
  position: absolute;
  background: transparent;
  transform: translateY(-50%);
  right: 0;
  top: 50%;
`;
