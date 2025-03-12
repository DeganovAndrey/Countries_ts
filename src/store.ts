import { useDispatch } from "react-redux";
import axios from "axios";
import { configureStore } from "@reduxjs/toolkit";

import * as api from "./config";
import { themeReducer } from "feature/theme/theme_slice";
import { detailsReducer } from "feature/details/details_slice";
import { countryReducer } from "feature/countries/countries_slice";
import { controlsReducer } from "feature/controls/controls_slice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    controls: controlsReducer,
    countries: countryReducer,
    details: detailsReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
