// WEBPACK ENTRY POINT
// RENDER APP TO DOM

import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
// Importing React-Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

render(
    <App />,
    document.getElementById('root')
)