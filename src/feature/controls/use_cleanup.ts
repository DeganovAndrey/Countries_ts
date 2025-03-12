import { useAppDispatch } from "store";
import { clearControls } from "./controls_slice";

export const useCleanUp = () => {
  const dispatch = useAppDispatch();

  const cleanUp = () => dispatch(clearControls());
  return () => dispatch(cleanUp());
};
