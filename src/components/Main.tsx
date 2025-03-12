import { FC, ReactNode } from "react";
import { Container } from "./Container";
import styled from "styled-components";

const Wrapper = styled.main`
  padding: 2rem 0;

  @media (min-width: 767px) {
    padding: 4rem 0;
  }
`;

interface MainProps {
  children: ReactNode;
}

export const Main: FC<MainProps> = ({ children }) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};
