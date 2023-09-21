import { createAnecdote } from '../requests';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { useNotificationDispatch } from '../NotificationContext';

const AnecdoteForm = () => {
  const queryClient = useQueryClient();
  const dispatch = useNotificationDispatch();
  const newAnecdoteMutation = useMutation({
    mutationFn: createAnecdote,
    onSuccess: (newDote) => {
      const anecdotes = queryClient.getQueryData({ queryKey: ['anecdotes'] });
      queryClient.setQueryData({ queryKey: ['anecdotes'] }, anecdotes.concat(newDote));
      dispatch({
        type: 'NOTIFY',
        payload: { content: `new anecdote '${newDote.content}' added` }
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

  const onCreate = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';
    newAnecdoteMutation.mutate({ content, votes: 0 });
  };

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type='submit'>create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
