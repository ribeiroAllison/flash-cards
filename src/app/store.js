import { configureStore } from "@reduxjs/toolkit";
import topicsReducer from "../features/topics/topicsSlice";
import quizzesReducer from "../features/quizzes/quizzesSlice";

export default configureStore({
  reducer: {
    topicsSlice: topicsReducer,
    quizzesSlice: quizzesReducer,
  },
});
