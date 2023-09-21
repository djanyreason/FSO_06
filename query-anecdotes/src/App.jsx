import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { useNotificationDispatch } from './NotificationContext';
import AnecdoteForm from './components/AnecdoteForm';
import Notification from './components/Notification';
import { getAnecdotes, addVote } from './requests';

const App = () => {
  const queryClient = useQueryClient();
  const dispatch = useNotificationDispatch();
  const newAnecdoteMutation = useMutation({
    mutationFn: addVote,
    onSuccess: (votedDote) => {
      const anecdotes = queryClient.getQueryData({ queryKey: ['anecdotes'] });
      queryClient.setQueryData({ queryKey: ['anecdotes'] }, anecdotes.map(dote =>
        dote.id === votedDote.id
          ? votedDote
          : dote
      ));
      dispatch({
        type: 'NOTIFY',
        payload: { content: `anecdote '${votedDote.content}' voted` }
      });
      setTimeout(() => dispatch({ type: 'REMOVE' }), 5000);
    },
    onError: (error) => {
      dispatch({
        type: 'NOTIFY',
        payload: { content: error.response.data.error }
      });
      setTimeout(() => dispatch({ type: 'REMOVE' }), 5000);
    }
  });

  const handleVote = (anecdote) => {
    newAnecdoteMutation.mutate(anecdote);
  };

  const result = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAnecdotes,
    refetchOnWindowFocus: false
  });

  if(result.isLoading) return <div>loading data...</div>;
  else if(result.isError)
    return <div>anecdote service not available due to problems in server</div>;

  const anecdotes = result.data;

  return (
    <div>
      <h3>Anecdote app</h3>

      <Notification />
      <AnecdoteForm />

      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
