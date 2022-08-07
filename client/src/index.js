import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import {UserProvider} from './context/user';
import {MessageProvider} from './context/message';
import {ItemProvider} from './context/item';
import {CategoryProvider} from './context/category';
import {CartProvider} from './context/cart';
import {OrderProvider} from './context/order';
import {ReviewProvider} from './context/review'


ReactDOM.render(
    <MessageProvider>
      <UserProvider>
      <OrderProvider>
      <ItemProvider>
      <ReviewProvider>
      <CategoryProvider>
      <CartProvider>
        <App />
      </CartProvider>
      </CategoryProvider>
      </ReviewProvider>
      </ItemProvider>
      </OrderProvider>
      </UserProvider>
    </MessageProvider>,

  document.getElementById("root")
);
