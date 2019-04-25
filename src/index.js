import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { AppContainer } from 'react-hot-loader'

import './common/style/index.scss';

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

const root = document.getElementById('root')

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <App />
        </AppContainer>,
        root,
        function() {
            console.info(999)
        }
    )
}

render(App)

if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default
        render(NextApp)
    })
}

serviceWorker.unregister();

