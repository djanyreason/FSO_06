This folder contains the Redux Anecdotes project which is developed in exercises 6.3-6.19 of Full Stack Open part 6: 
* https://fullstackopen.com/en/part6/flux_architecture_and_redux#exercises-6-3-6-8
* https://fullstackopen.com/en/part6/many_reducers#exercise-6-9
* https://fullstackopen.com/en/part6/many_reducers#exercises-6-10-6-13
* https://fullstackopen.com/en/part6/communicating_with_server_in_a_redux_application#exercises-6-14-6-15
* https://fullstackopen.com/en/part6/communicating_with_server_in_a_redux_application#exercises-6-16-6-19

The app is built starting from code in the following repository: https://github.com/fullstack-hy2020/redux-anecdotes

This web app displays a list of software engineering anecdotes, which are accessed from a server (as implemented, using json-server and a local json file). Each anecdote has a number of "votes" associated with it, which are displayed following the anecdote, along with a button to vote for the anecdote. A notification is displayed when a user votes for an anecdote. The application also includes a filter to search for anecdotes, and a short form to add new anecdotes.

This project is built using React. Is relies on Redux to manage state, and makes use of Action creators and Redux Toolkit's createSlice. Communications with the backend server are handled via Axios, and integrated into the Redux 'anecdoteReducer.js' reducer. Communications are implemented asynchronously through Redux Thunk.
