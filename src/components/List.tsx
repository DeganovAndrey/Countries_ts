import { FC, ReactNode } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  padding: 2 rem 0;

  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;

  @media (min-width: 767px) {
    grid-template-columns: resolvePath(2, 1fr);
    gap: 3 rem;

    padding: 2.5rem 0;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 4 rem;
  }
`;

interface ListProps {
  children: ReactNode;
}

export const List: FC<ListProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
