import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";

interface UserState {
  user?: string;
}

const initialState: UserState = {
  user: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<string | undefined>) => {
      state.user = action.payload;
    },
  },
});
export const { updateUser } = userSlice.actions;

export const selectPhoneVerifyToken = (state: RootState) => state.user.user;
export default userSlice.reducer;
