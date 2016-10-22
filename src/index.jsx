import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from './Calendar.jsx';

const rootEl = document.getElementById('root');
ReactDOM.render(
  <AppContainer>
    <Calendar />
  </AppContainer>,
  rootEl
);

if (module.hot && process.env.NODE_ENV !== 'production') {
  module.hot.accept('./Calendar.jsx', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <Calendar /> here rather than require() a <NextApp />.
    const NextApp = require('./Calendar.jsx').default;
    ReactDOM.render(
      <AppContainer>
         <NextApp />
      </AppContainer>,
      rootEl
    );
  });
}
