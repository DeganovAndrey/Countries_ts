import { useEffect } from "react";

import { clearDetails, loadCountryByName } from "./details_slice";
import { useAppDispatch } from "store";
import { useSelector } from "react-redux";
import { selectDetails } from "./details_selectors";

export const useDetails = (name: string) => {
  const dispatch = useAppDispatch();
  const details = useSelector(selectDetails);

  useEffect(() => {
    dispatch(loadCountryByName(name));
    return () => {
      dispatch(clearDetails.clearDetails());
    };
  }, [name, dispatch]);
  return details;
};
