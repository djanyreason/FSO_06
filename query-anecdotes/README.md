This folder contains the Query Anecdotes project which is developed in exercises 6.20-6.24 of Full Stack Open part 6: 
* https://fullstackopen.com/en/part6/react_query_use_reducer_and_the_context#exercises-6-20-6-22
* https://fullstackopen.com/en/part6/react_query_use_reducer_and_the_context#exercises-6-23-6-24

The app is built starting from code in the following repository: hhttps://github.com/fullstack-hy2020/query-anecdotes

This web app displays a list of software engineering anecdotes, which are accessed from a server (as implemented, using json-server and a local json file). Each anecdote has a number of "votes" associated with it, which are displayed following the anecdote, along with a button to vote for the anecdote. A notification is displayed when a user votes for an anecdote. The application also includes a filter to search for anecdotes, and a short form to add new anecdotes.

This project is built using React. It relies on React Query to store and manage state for data retrieved from the server. It uses react's useReducer hook to manage state for other elements (e.g., notification messages).
