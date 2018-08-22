import React from 'react';
import { render } from 'react-dom';
import css from './styles/style.styl';

import App from './components/App'
import Single from './components/Single'
import PhotoGrid from './components/PhotoGrid'

import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

import Raven from 'raven-js';

Raven.config('https://a91dfc23f89f409382a387bf64ea5e94@sentry.io/1267116', {
    tags: {
        git_commit: 'abc',
        userLevel: 'editor'
    }
}).install()

Raven.captureMessage('something bad happaned');
Raven.showReportDialog();


const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path="/view/:postId" component={Single}></Route>
            </Route>
        </Router>
    </Provider>
)

render(router, document.getElementById('root'));


//2
