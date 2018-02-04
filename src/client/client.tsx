import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App';
import { initWS } from './sio';

ReactDOM.render(<App/>, document.getElementById('app'));

initWS();