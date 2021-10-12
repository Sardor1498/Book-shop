import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import store from "./redux/redux-store";
import AxiosConfig from "./config/AxiosConfig";
import { Provider } from "react-redux";
import CartState from './Context/Cart/CartState'

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <AxiosConfig>
        <CartState>
          <App />
        </CartState>
      </AxiosConfig>
    </Provider>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
//git add . //git commit -m "salom bollor" //git push