import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
