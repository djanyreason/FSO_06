import React from 'react';
import ReactDOM from 'react-dom/client';

import { createStore } from 'redux';
import counterReducer from './reducers/reducer';

const store = createStore(counterReducer);

const App = () => {
  const good = () => {
    store.dispatch({
      type: 'GOOD'
    });
  };

  return (
    <div>
      <button onClick={e => store.dispatch({ type: 'GOOD' })}>good</button>
      <button onClick={e => store.dispatch({ type: 'OK' })}>ok</button>
      <button onClick={e => store.dispatch({ type: 'BAD' })}>bad</button>
      <button onClick={e => store.dispatch({ type: 'ZERO' })}>reset stats</button>
      <div>good {store.getState().good}</div>
      <div>ok {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderApp = () => {
  root.render(<App />);
};

renderApp();
store.subscribe(renderApp);
