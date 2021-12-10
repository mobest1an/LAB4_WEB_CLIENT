import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import loadable from '@loadable/component';

const App = loadable(() => import('./App'), {
    fallback: <div><h1>Loading...</h1></div>
});

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
);
