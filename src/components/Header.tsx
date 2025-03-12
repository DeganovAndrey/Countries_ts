// import { useCleanUp } from "feature/controls/use_cleanup";
// import { Container } from "./Container";

// export const Header = () => {
//   const cleanUp = useCleanUp();

//   return (
//     <HeaderEl>
//       <Container>
//         <Wrapper>
//           <Title onClick={cleanUp}>Where is the worlds?</Title>
//           <ThemeSwitcher />
//         </Wrapper>
//       </Container>
//     </HeaderEl>
//   );
// };

// import styled from "styled-components";
// import { Link } from "react-router-dom";

// import { Container } from "./Container";
// import { useCleanUp } from "feature/controls/use_cleanup";
// import { ThemeSwitcher } from "feature/theme/ThemeSwitcher";

// const HeaderEl = styled.header`
//   box-shadow: var(--shadow);
//   background-color: var(--colors-ui-base);
// `;

// const Wrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 2rem 0;
// `;

// const Title = styled(Link).attrs({
//   to: "/",
// })`
//   color: var(--colors-text);
//   font-size: var(--fs-sm);
//   text-decoration: none;
//   font-weight: var(--fw-bold);
// `;

// export const Header = () => {
//   const cleanUp = useCleanUp();

//   return (
//     <HeaderEl>
//       <Container>
//         <Wrapper>
//           <Title onClick={cleanUp}>Where is the world?</Title>
//           <ThemeSwitcher />
//         </Wrapper>
//       </Container>
//     </HeaderEl>
//   );
// };
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Container } from "./Container";
import { useCleanUp } from "feature/controls/use_cleanup";
import { ThemeSwitcher } from "feature/theme/ThemeSwitcher";

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const TitleLink = styled(Link).attrs({ to: "/" })`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
  cursor: pointer; /* Добавьте курсор для наглядности */
`;

const TitleText = styled.span`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
  cursor: pointer; /* Добавьте курсор для наглядности */
`;

export const Header = () => {
  const cleanUp = useCleanUp();

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <TitleLink to="/">Where is the world?</TitleLink> {/* Ссылка */}
          <TitleText onClick={cleanUp}>Where is the world?</TitleText>{" "}
          {/* Текст с обработчиком */}
          <ThemeSwitcher />
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};