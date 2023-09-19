import { useSelector } from 'react-redux';
import Anecdote from './Anecdote';

const AnecdoteList = () => {
  const anecdotes = useSelector(({ anecdotes, filter }) => 
    anecdotes.filter(dote => 
      dote.content
        .toLowerCase()
        .search(filter.toLowerCase())
        >= 0)
  );

  return (
    <div>
      {anecdotes
        .sort((a1, a2) => a2.votes - a1.votes)
        .map(anecdote => <Anecdote key={anecdote.id} anecdote={anecdote} />)
      }
    </div>
  );
};

export default AnecdoteList