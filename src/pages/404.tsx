import {
  NotFoundContainer,
  ErrorCode,
  Title,
  Subtitle,
  StyledLink,
} from "./404.styles";

export const NotFound = () => {
  return (
    <NotFoundContainer>
      <ErrorCode>404</ErrorCode>
      <Title>ERROR: PAGE NOT FOUND</Title>
      <Subtitle>Вы вступили в бездну. Бегите, пока можете!</Subtitle>
      <StyledLink to="/">БЕГСТВО В БЕЗОПАСНОЕ МЕСТО</StyledLink>
    </NotFoundContainer>
  );
};
