import React from 'react';
import {HashRouter} from "react-router-dom";
import {App} from "./App";
import {store} from './state/store';
import {Provider} from 'react-redux';
import {createRoot} from "react-dom/client";


const root = createRoot(document.getElementById('root')!)
root.render(
    <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>,
)
