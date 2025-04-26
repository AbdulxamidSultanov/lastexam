import { createSlice } from "@reduxjs/toolkit";

interface JobState {
  theme: string;
}

const initialState: JobState = {
  theme: "dark",
};

const jobSlice = createSlice({
  name: "jobSlice",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export default jobSlice.reducer;
export const { changeTheme } = jobSlice.actions;
