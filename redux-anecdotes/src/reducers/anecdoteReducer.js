import { createSlice } from '@reduxjs/toolkit';

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  };
};

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    addAnecdote(state, action) {
      state.push(asObject(action.payload))
    },
    yoVote(state, action) {
      return state.map(
        dote => dote.id !== action.payload
        ? dote
        : { ...dote, votes: (dote.votes+1)}
      );
    },
    overwriteAnecdoteState(state, action) {
      return action.payload
    }
  }
});

export const { addAnecdote, yoVote, overwriteAnecdoteState } = anecdoteSlice.actions;

export default anecdoteSlice.reducer;