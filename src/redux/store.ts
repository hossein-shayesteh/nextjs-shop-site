import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "@/redux/reducers/authentication";
import userReducer from "@/redux/reducers/user";

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    user: userReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
