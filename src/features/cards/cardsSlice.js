import { createSlice } from "@reduxjs/toolkit";

const cardsSlice = createSlice({
  name: "cardsSlice",
  initialState: {
    cards: {},
  },

  reducers: {
    addCard: (state, action) => {
      const { id, front, back } = action.payload;
      state.cards[id] = {
        id: id,
        front: front,
        back: back,
      };
    },
  },
});

export const cardsSelector = (id) => (state) => {
  if (state.cardsSlice.cards) {
    return state.cardsSlice.cards[id];
  }
};

export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;
