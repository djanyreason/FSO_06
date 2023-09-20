import { useDispatch } from 'react-redux';
import { addAnecdote } from '../reducers/anecdoteReducer';
import { notify, removeNotification } from '../reducers/notificationReducer';
import anecdoteService from '../services/anecdotes';

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addNew = async (event) => {
    event.preventDefault();
    const newDote = event.target.anecdote.value;
    event.target.anecdote.value = '';
    const newDoteObject = await anecdoteService.createNew(newDote);
    dispatch(addAnecdote(newDoteObject));
    dispatch(notify(`you added '${newDoteObject.content}'`));
    setTimeout(() => dispatch(removeNotification()), 5000);
  };

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addNew}>
        <div><input name='anecdote' /></div>
        <button type='submit'>create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;