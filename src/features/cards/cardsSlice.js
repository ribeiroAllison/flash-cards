import { createSlice } from "@reduxjs/toolkit";

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

export const cardsSelector = (id) => (state) =>
  Object.values(state.cards).find((card) => card.id === id);

export const { addCards } = cardsSlice.actions;
export default cardsSlice.reducer;
