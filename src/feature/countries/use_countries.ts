import { selectControls } from "feature/controls/controls_selectors";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { RootState, useAppDispatch } from "store";
import {
  selectCountriesInfo,
  selectVisibleCountries,
} from "./countries_selectors";
import { loadCountries } from "./countries_slice";
import { Country } from "types";

export const useCountries = (): [
  Country[],
  ReturnType<typeof selectCountriesInfo>
] => {
  const dispatch = useAppDispatch();
  const controls = useSelector(selectControls);
  const countries = useSelector((state: RootState) =>
    selectVisibleCountries(state, controls)
  );
  const { status, error, qty } = useSelector(selectCountriesInfo);

  useEffect(() => {
    if (!qty) {
      dispatch(loadCountries());
    }
  }, [qty, dispatch]);

  return [countries, { status, error, qty }];
};
