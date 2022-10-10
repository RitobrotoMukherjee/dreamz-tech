import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider} from 'react-redux';
import store from './redux/configureStore';
import AppRouter from './Router';

const root = ReactDOM.createRoot(document.getElementById('dreamz-tech-frontend'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
