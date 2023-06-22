import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from "react-redux";

const defaultState = {
    initialView: 'dayGridMonth'
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'MONTH_VIEW':
            return {...state, initialView: action.payload}
        case 'LIST_VIEW':
            return {...state, initialView: action.payload}
        default:
            return state
    }
};

const store = configureStore({reducer});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><App /></Provider>);