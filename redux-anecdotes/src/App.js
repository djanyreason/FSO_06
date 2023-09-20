import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import Filter from './components/Filter';
import Notification from './components/Notification';
import anecdoteService from './services/anecdotes';
import { overwriteAnecdoteState } from './reducers/anecdoteReducer';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    anecdoteService.getAll()
      .then(anecdotes => 
        dispatch(overwriteAnecdoteState(anecdotes)))
  }, []);

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  );
};

export default App;