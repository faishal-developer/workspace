import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Language/i18';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import MainRoutes from './routes/Index';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../src/scss/global.scss'
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import { temporaryStore } from './Store/Store';
import './scss/global.scss'


localStorage.setItem("userData",true);
localStorage.setItem("isDeveloper",false);
const root = ReactDOM.createRoot(document.getElementById('root'));

// root is wrapped up with router and redux
root.render(
  <React.StrictMode>
    <Provider store={temporaryStore}>
        <BrowserRouter basename='/'>
          <ToastContainer />
          <MainRoutes />
        </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
