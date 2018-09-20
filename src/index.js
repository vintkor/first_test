import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import 'bootstrap/scss/bootstrap-reboot.scss';
import 'bootstrap/scss/bootstrap-grid.scss';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from "./reducers";

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <Home />
    </Provider>,
    document.getElementById('root'));