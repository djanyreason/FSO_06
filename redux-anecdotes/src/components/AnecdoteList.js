import { useSelector } from 'react-redux';
import Anecdote from './Anecdote';

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state);

  return (
    <div>
      {anecdotes
        .sort((a1, a2) => a2.votes - a1.votes)
        .map(anecdote => <Anecdote anecdote={anecdote} />)
      }
    </div>
  );
};

export default AnecdoteList