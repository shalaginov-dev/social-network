import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import './index.css';
import {store} from './state/store';
import {Provider} from 'react-redux';
import {createRoot} from "react-dom/client";


const root = createRoot(document.getElementById('root')!)
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
)
