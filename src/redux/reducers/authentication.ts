import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";

interface AuthenticationState {
  phoneVerifyToken?: string;
}

const initialState: AuthenticationState = {
  phoneVerifyToken: undefined,
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    updatePhoneVerifyToken: (
      state,
      action: PayloadAction<string | undefined>
    ) => {
      state.phoneVerifyToken = action.payload;
    },
  },
});
export const { updatePhoneVerifyToken } = authenticationSlice.actions;

export const selectPhoneVerifyToken = (state: RootState) =>
  state.authentication.phoneVerifyToken;
export default authenticationSlice.reducer;
