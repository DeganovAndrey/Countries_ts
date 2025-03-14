import { Country, Extra, Status } from "types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const loadCountryByName = createAsyncThunk<
  { data: Country[] },
  string,
  {
    extra: Extra;
  }
>("@@details/loadCountryByName", (name, { extra: { client, api } }) => {
  return client.get(api.searchByCountry(name));
});
export const loadNeighborsByBorder = createAsyncThunk<
  { data: Country[] },
  string[],
  {
    extra: Extra;
  }
>("@@details/load-neighbors", (borders, { extra: { client, api } }) => {
  return client.get(api.filterByCode(borders));
});

type DetailsSlice = {
  currentCountry: Country | null;
  neighbors: string[];
  status: Status;
  error: string | null;
};

const initialState: DetailsSlice = {
  currentCountry: null,
  neighbors: [],
  status: "idle",
  error: null,
};

const detailsSlice = createSlice({
  name: "@@details",
  initialState,
  reducers: {
    clearDetails: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCountryByName.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadCountryByName.rejected, (state) => {
        state.status = "rejected";
        state.error = "Can not load data";
      })
      .addCase(
        loadCountryByName.fulfilled,
        (state, action: PayloadAction<{ data: Country[] }>) => {
          state.status = "received";
          state.currentCountry = action.payload.data[0];
        }
      )
      .addCase(
        loadNeighborsByBorder.fulfilled,
        (state, action: PayloadAction<{ data: Country[] }>) => {
          state.neighbors = action.payload.data.map((country) => country.name);
        }
      );
  },
});

export const clearDetails = detailsSlice.actions;
export const detailsReducer = detailsSlice.reducer;
