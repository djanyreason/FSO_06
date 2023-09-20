import { useDispatch } from 'react-redux';
import { yoVote } from '../reducers/anecdoteReducer';
import { notify, removeNotification } from '../reducers/notificationReducer';

const Anecdote = ({ anecdote }) => {
  const dispatch = useDispatch();

  const handleClick = async () => {
    dispatch(yoVote(anecdote));
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