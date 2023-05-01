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

localStorage.setItem("userData",true);
localStorage.setItem("isDeveloper",false);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={temporaryStore}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <BrowserRouter basename='/'>
          <ToastContainer />
          <MainRoutes />
          {/* <App/> */}
        </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
