import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
import { redirect } from "react-router-dom";

const cardsSlice = createSlice({
  name: "cardsSlice",
  initialState: {
    cards: {},
    reducer: {
      addCards: (state, action) => {
        const { id, front, back } = action.payload;
        state.cards[id] = {
          id: id,
          front: front,
          back: back,
        };
      },
    },
  },
});

export const cardsSelector = (state) => state.cardsSlice.cards;

export const { addCards } = cardsSlice.actions;
export default cardsSlice.reducer;
