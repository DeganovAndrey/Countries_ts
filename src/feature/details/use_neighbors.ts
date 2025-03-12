import { useAppDispatch } from "store";
import { selectNeighbors } from "./details_selectors";
import { useEffect } from "react";
import { loadNeighborsByBorder } from "./details_slice";
import { useSelector } from "react-redux";

export const useNeighbors = (borders: string[] = []) => {
  const dispatch = useAppDispatch();
  const neighbors = useSelector(selectNeighbors);

  useEffect(() => {
    if (borders.length) {
      dispatch(loadNeighborsByBorder(borders));
    }
  }, [borders, dispatch]);
  return neighbors;
};
