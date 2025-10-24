import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #000000 0%, #8b0000 100%);
  color: #ff0000;
  text-align: center;
  padding: 20px;
  overflow: hidden;
  margin-top: -50px;
`;

export const ErrorCode = styled.h1`
  font-size: 12rem;
  font-weight: bold;
  color: #ff0000;
  text-shadow:
    0 0 20px rgba(255, 0, 0, 0.8),
    0 0 40px rgba(255, 0, 0, 0.6);
  animation: ${pulse} 2s infinite;
  margin-bottom: 10px;
`;

export const Title = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  color: #ffffff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
  margin-bottom: 10px;
`;

export const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #cccccc;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
  margin-bottom: 30px;
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  padding: 15px 30px;
  background-color: #ff0000;
  color: #ffffff;
  text-decoration: none;
  border-radius: 8px;
  font-size: 1.3rem;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(255, 0, 0, 0.5);
  text-transform: uppercase;

  &:hover {
    background-color: #cc0000;
    box-shadow: 0 6px 12px rgba(255, 0, 0, 0.8);
    transform: scale(1.05);
  }
`;
