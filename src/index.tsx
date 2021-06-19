import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import { StateType } from "./redux/state";
import { store } from './redux/redux-store';

function renderedEntireTree(state: StateType) {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store} />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

renderedEntireTree(store.getState())
store.subscribe( () => {
    let state = store.getState()
    renderedEntireTree(state)
} )