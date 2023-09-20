/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const baseUrl = 'http://localhost:3001/anecdotes';

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createNew = async (content) => {
  const response = await axios.post(baseUrl, { content, votes: 0 });
  return response.data;
};

const addVote = async (dote) => {
  const response = await axios.put(`${baseUrl}/${dote.id}`, { ...dote, votes: (dote.votes + 1)});
  return response.data;
}

export default { getAll, createNew, addVote };