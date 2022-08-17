import React, { Component } from 'react';
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import {BrowserRouter} from "react-router-dom";
import zhCN from "antd/es/locale/zh_CN";
import store from "./store";
import { Router } from './router'

class App extends Component {
  render() { 
    return (
      <ConfigProvider locale={zhCN}>
        <Provider store={store}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </Provider>
      </ConfigProvider>
    );
  }
}

export default App;
