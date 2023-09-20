import { useDispatch } from 'react-redux';
import { yoVote } from '../reducers/anecdoteReducer';
import { notify, removeNotification } from '../reducers/notificationReducer';
import anecdoteService from '../services/anecdotes';

const Anecdote = ({ anecdote }) => {
  const dispatch = useDispatch();

  const handleClick = async () => {
    await anecdoteService.addVote(anecdote);
    dispatch(yoVote(anecdote.id));
    dispatch(notify(`you voted '${anecdote.content}'`));
    setTimeout(() => dispatch(removeNotification()), 5000);
  };

  return (
    <div>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={handleClick}>vote</button>
      </div>
    </div>
  );
};

export default Anecdote;