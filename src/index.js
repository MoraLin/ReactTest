import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

const rootElement = document.getElementById('app');

//宣告一個renderApp Function
const renderApp = (element) => {
  const App = require('./app')
  render(
    <AppContainer>
        <App />
    </AppContainer>,
    element
  );
};

renderApp(rootElement);

//module 類似監聽器，監控App是否有更動
if (module.hot) {
	module.hot.accept(
    './app.js',
    () => renderApp(rootElement)
  );
}
