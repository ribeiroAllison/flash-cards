import { createSlice } from "@reduxjs/toolkit";

const topicsSlice = createSlice({
  name: "topicsSlice",
  initialState: {
    topics: {},
  },
  reducers: {
    addTopic: (state, action) => {
      const { id, name, icon } = action.payload;
      state.topics[id] = { name: name, icon: icon, quizId: [] };
    },
  },
});

export const selectTopics = (state) => state.topicsSlice.topics;

export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;
