import { createSlice } from "@reduxjs/toolkit";

const quizzesSlice = createSlice({
  name: "topicsSlice",
  initialState: {
    quizzes: {},
  },
  reducers: {
    addQuiz: (state, action) => {
      const { id, name, topicId, cardsId } = action.payload;
      state.quizzes[id] = {
        name: name,
        topicId: topicId,
        cardsId: cardsId,
      };
    },
  },
});

export const selectQuiz = (state) => state.quizzesSlice.quizzes;

export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
