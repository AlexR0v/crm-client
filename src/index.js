import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/redux-store.js';
<<<<<<< HEAD
=======
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

>>>>>>> santiago/feature/test-repo

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
<<<<<<< HEAD
          <App />
=======
          <GoogleReCaptchaProvider
              reCaptchaKey="6LcPUdcZAAAAAHkgp3H7Ce5YUeHSLFTy1QYkQY4J"
              language="en"
            >
            <App />
          </GoogleReCaptchaProvider>
>>>>>>> santiago/feature/test-repo
        </Provider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
