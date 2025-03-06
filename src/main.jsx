import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify';
import { GoogleOAuthProvider } from '@react-oauth/google'
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
  <GoogleOAuthProvider clientId={clientId}>
  <React.StrictMode>
    <App />
    <ToastContainer />
  </React.StrictMode>
  </GoogleOAuthProvider>
  </PersistGate>
  </Provider>,
)
