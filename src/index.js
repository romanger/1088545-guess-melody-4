import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import questions from "./mocks/questions.js";
import settings from "./mocks/settings.js";

const init = () => {
  ReactDOM.render(
      <App
        errorCount={settings.ERROR_COUNT}
        gameTime={settings.GAME_TIME}
        questions={questions}
      />,
      document.querySelector(`#root`)
  );
};

init();
