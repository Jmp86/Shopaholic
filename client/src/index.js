import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import {UserProvider} from './context/user';
import {MessageProvider} from './context/message';
import {ItemProvider} from './context/item';
import {CategoryProvider} from './context/category';
import {CartProvider} from './context/cart';
import {OrderProvider} from './context/order';


ReactDOM.render(
    <MessageProvider>
      <UserProvider>
      <OrderProvider>
      <ItemProvider>
      <CategoryProvider>
      <CartProvider>
        <App />
      </CartProvider>
      </CategoryProvider>
      </ItemProvider>
      </OrderProvider>
      </UserProvider>
    </MessageProvider>,

  document.getElementById("root")
);
