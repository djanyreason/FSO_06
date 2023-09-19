import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  const anecdotes = useSelector(state => state);
  const dispatch = useDispatch();

  const vote = (id) => {
    dispatch({ 
      type: 'VOTE', 
      payload: { id: id }
    });
  };

  const addAnecdote = (event) => {
    event.preventDefault();

    dispatch({
      type: 'NEW_ANECDOTE',
      payload: { anecdote: event.target.anecdote.value }
    });

    event.target.anecdote.value = '';
  };

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name='anecdote' /></div>
        <button type='submit'>create</button>
      </form>
    </div>
  );
};

export default App;