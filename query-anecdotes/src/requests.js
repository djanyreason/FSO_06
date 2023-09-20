import axios from 'axios';

const baseUrl = 'http://localhost:3001/anecdotes';

export const getAnecdotes = () =>
  axios.get(baseUrl).then(res => res.data);

export const createAnecdote = newDote =>
  axios.post(baseUrl, newDote).then(res => res.data);

export const addVote = votedAnecdote =>
  axios.put(`${baseUrl}/${votedAnecdote.id}`, { ...votedAnecdote, votes: votedAnecdote.votes + 1 })
    .then(res => res.data);