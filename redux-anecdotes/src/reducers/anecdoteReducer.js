import { createSlice } from '@reduxjs/toolkit';
import anecdoteService from '../services/anecdotes';

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    addAnecdote(state, action) {
      state.push(action.payload)
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

export const { addAnecdote, yoVote } = anecdoteSlice.actions;

export const initializeAnecdotes =  () => {
  return async dispatch => {
    const init = await anecdoteService.getAll();
    dispatch(anecdoteSlice.actions.overwriteAnecdoteState(init));
  };
};

export default anecdoteSlice.reducer;