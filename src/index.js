import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from './Calendar';

const rootEl = document.getElementById('root');
ReactDOM.render(
  <AppContainer>
    <Calendar />
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./Calendar', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <Calendar /> here rather than require() a <NextApp />.
    const NextApp = require('./Calendar').default;
    ReactDOM.render(
      <AppContainer>
         <NextApp />
      </AppContainer>,
      rootEl
    );
  });
}
