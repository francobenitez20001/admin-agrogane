import React,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {FirebaseAppProvider} from 'reactfire';
import firebaseConfig from './firebase-config';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render((
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Suspense fallback={'Cargando la app'}>
      <App />
    </Suspense>
  </FirebaseAppProvider>),
  document.getElementById('app')
);

