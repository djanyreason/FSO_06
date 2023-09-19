import { useSelector, useDispatch } from 'react-redux';
import { yoVote } from './reducers/anecdoteReducer';
import AnecdoteForm from './components/AnecdoteForm';

const App = () => {
  const anecdotes = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes
        .sort((a1, a2) => a2.votes - a1.votes)
        .map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => dispatch(yoVote(anecdote.id))}>vote</button>
            </div>
          </div>
      )}
      <AnecdoteForm />
    </div>
  );
};

export default App;