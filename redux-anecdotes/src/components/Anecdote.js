import { useDispatch } from 'react-redux';
import { yoVote } from '../reducers/anecdoteReducer';

const Anecdote = ({ anecdote }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={() => dispatch(yoVote(anecdote.id))}>vote</button>
      </div>
    </div>
  );
};

export default Anecdote;