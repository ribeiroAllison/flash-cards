import { createSlice } from "@reduxjs/toolkit";

const topicsSlice = createSlice({
  name: "topicsSlice",
  initialState: {
    topics: {},
  },
  reducers: {
    addTopic: (state, action) => {
      const { id, name, icon } = action.payload;
      state.topics[id] = { id: id, name: name, icon: icon, quizId: [] };
    },
    extraReducers: (builder) => {
      builder.addCase("addQuiz", (state, action) => {
        const { id, topicId } = action.payload;
        state.topics[topicId] && state.topics[topicId].quizId.push(id);
      });
    },
  },
});

export const selectTopics = (state) => state.topicsSlice.topics;

export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;
