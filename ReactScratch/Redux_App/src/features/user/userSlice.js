import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser(state, { payload }) {
      state.firstName = payload.values.firstName;
      state.lastName = payload.values.lastName;
      state.email = payload.values.email;
      state.password = payload.values.confirmPassword;
    },
  },
});
export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
