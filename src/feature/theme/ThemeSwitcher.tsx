import { IoMoon, IoMoonOutline } from "react-icons/io5";
import styled from "styled-components";
import { useTheme } from "./use_theme";
import { FC } from "react";

const ModeSwitcher = styled.div`
  color: var(--color-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  text-transform: capitalize;
`;

// interface ThemeSwitcherProps {
//   onClick: React.MouseEventHandler<HTMLDivElement>;
// }

export const ThemeSwitcher: FC = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <ModeSwitcher onClick={toggleTheme}>
      {theme === "light" ? (
        <IoMoonOutline size="14px" />
      ) : (
        <IoMoon size="14px" />
      )}
      <span style={{ marginLeft: "0.75rem" }}>{theme} Theme</span>
    </ModeSwitcher>
  );
};
