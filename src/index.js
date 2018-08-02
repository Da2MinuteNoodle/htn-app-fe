import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/jelly.css';
import './components/Viewcust/Viewcust.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
