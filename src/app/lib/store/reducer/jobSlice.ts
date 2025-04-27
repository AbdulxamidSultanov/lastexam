import { createSlice } from "@reduxjs/toolkit";

interface JobState {
  theme: string;
  isLoged: boolean;
}

const initialState: JobState = {
  theme: "dark",
  isLoged: false,
};

const jobSlice = createSlice({
  name: "jobSlice",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.theme = action.payload;
    },
    changeLoginStatus: (state, action) => {
      state.isLoged = action.payload;
    },
  },
});

export default jobSlice.reducer;
export const { changeTheme, changeLoginStatus } = jobSlice.actions;
