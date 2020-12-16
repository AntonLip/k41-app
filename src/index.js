import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './Redux/redux-store'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';


let rerender = (state) => ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App  />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
rerender(store.getState());
store.subscribe(() => {
  let state = store.getState();
  rerender(state);
});

serviceWorker.unregister();
