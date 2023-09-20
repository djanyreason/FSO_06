import { createSlice } from '@reduxjs/toolkit';
import anecdoteService from '../services/anecdotes';

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    appendAnecdote(state, action) {
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

export const { yoVote } = anecdoteSlice.actions;

export const initializeAnecdotes = () => {
  return async dispatch => {
    const init = await anecdoteService.getAll();
    dispatch(anecdoteSlice.actions.overwriteAnecdoteState(init));
  };
};

export const addAnecdote = (newDote) => {
  return async dispatch => {
    const newDoteObj = await anecdoteService.createNew(newDote);
    dispatch(anecdoteSlice.actions.appendAnecdote(newDoteObj));
  };
};

export default anecdoteSlice.reducer;