import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/hello';

// hydrate should be used if components are rendered on the server
ReactDOM.hydrate(
    <Hello {...window.APP_STATE} />,
    document.getElementById('app')
);