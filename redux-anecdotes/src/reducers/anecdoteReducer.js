import { createSlice } from '@reduxjs/toolkit';
import anecdoteService from '../services/anecdotes';

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    addVote(state, action) {
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

export const yoVote = (id) => {
  return async (dispatch, getState) => {
    const foundById = getState().anecdotes.filter(dote => dote.id === id);
    if(foundById.length !== 1) return null;
    await anecdoteService.addVote(foundById[0]);
    dispatch(anecdoteSlice.actions.addVote(id));
  };
};

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