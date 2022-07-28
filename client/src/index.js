import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import {UserProvider} from './context/user';
import {MessageProvider} from './context/message';
import {ItemProvider} from './context/item';
import {CategoryProvider} from './context/category';
import {CartProvider} from './context/cart';


ReactDOM.render(
    <MessageProvider>
      <ItemProvider>
      <CategoryProvider>
      <UserProvider>
      <CartProvider>
        <App />
      </CartProvider>
      </UserProvider>
      </CategoryProvider>
      </ItemProvider>
    </MessageProvider>,

  document.getElementById("root")
);
