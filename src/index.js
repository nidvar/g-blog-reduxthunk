import React from 'react';
import ReactDOM from 'react-dom';


import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import Reducers from './Reducers/RootReducer';
import App from './App';

const store = createStore(Reducers, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById('root'));