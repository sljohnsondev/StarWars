import React from 'react';
import ReactDOM from 'react-dom';
// import './reset.css'
import './index.css';
import App from './App/index.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
