import { createSlice } from "@reduxjs/toolkit";

const topicsSlice = createSlice({
  name: "topicsSlice",
  initialState: {
    topics: {},
  },
  reducers: {
    addTopic: (state, action) => {
      state.topics[`${action.payload.id}`].name = action.payload.name;
      state.topics[`${action.payload.id}`].icon = action.payload.icon;
      state.topics[`${action.payload.id}`].quizIds = [];
    },
  },
});
