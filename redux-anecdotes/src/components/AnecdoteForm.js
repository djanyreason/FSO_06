import { useDispatch } from 'react-redux';
import { addAnecdote } from '../reducers/anecdoteReducer';

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addNew = (event) => {
    event.preventDefault();
    dispatch(addAnecdote(event.target.anecdote.value));
    event.target.anecdote.value = '';
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