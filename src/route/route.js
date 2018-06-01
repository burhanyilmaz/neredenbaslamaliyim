import React from 'react';
import { Route , BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { Home } from '../modules/Home/index';

export default(
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" component={Home} />
        </BrowserRouter>
    </Provider>
);