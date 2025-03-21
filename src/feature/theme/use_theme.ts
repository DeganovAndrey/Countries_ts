import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { setTheme, Theme } from "./theme_slice";
import { selectTheme } from "./theme_selectors";

export const useTheme = (): [Theme, () => void] => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  const toggleTheme = () => {
    dispatch(setTheme.setTheme(theme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);
  return [theme, toggleTheme];
};
