import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

export default configureStore<Application.ReducerType>({
  reducer: {
    counter: counterSlice,
  },
})