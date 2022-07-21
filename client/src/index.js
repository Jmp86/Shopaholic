import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
// import {API_KEY} from './config.js';
import {UserProvider} from './context/user';
import {MessageProvider} from './context/message';

ReactDOM.render(
    <MessageProvider>
      <UserProvider>
      <App />
      </UserProvider>
    </MessageProvider>,

  document.getElementById("root")
);
