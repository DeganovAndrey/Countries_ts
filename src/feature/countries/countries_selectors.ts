import { RootState } from "store";

export const selectCountriesInfo = (state: RootState) => ({
  status: state.countries.status,
  error: state.countries.error,
  qty: state.countries.list.length,
});

export const selectAllCountries = (state: RootState) => state.countries.list;
// export const selectVisibleCountries = (
//   state: RootState,
//   { search = "", region = "" }
// ) => {
//   return state.countries.list.filter(
//     (country) =>
//       country.name.toLowerCase().includes(search.toLowerCase()) &&
//       country.region.includes(region)
//   );
// };

export const selectVisibleCountries = (
  state: RootState,
  { search = "", region = "" }
) => {
  return state.countries.list.filter((country) => {
    const countryName = country.name;
    const searchLower = search.toLowerCase();
    return (
      countryName !== null &&
      typeof countryName === "string" &&
      countryName.toLowerCase().includes(searchLower) &&
      country.region.includes(region)
    );
  });
};
