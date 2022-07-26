import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
// import {API_KEY} from './config.js';
import {UserProvider} from './context/user';
import {MessageProvider} from './context/message';
import {ItemProvider} from './context/item';
import {CategoryProvider} from './context/category';

ReactDOM.render(
    <MessageProvider>
      <ItemProvider>
      <CategoryProvider>
      <UserProvider>
        <App />
      </UserProvider>
      </CategoryProvider>
      </ItemProvider>
    </MessageProvider>,

  document.getElementById("root")
);
