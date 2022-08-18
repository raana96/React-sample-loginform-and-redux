import React, { Component } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Pages";
import Orders from "./components/Pages/Orders";
import Customers from "./components/Pages/Customers";
import Integrations from "./components/Pages/Integrations";
import Reports from "./components/Pages/Reports";
import { store } from "./helpers";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import { ThemeProvider } from '@mui/material/styles';
import { createBrowserHistory } from 'history';

import theme from "./theme"

const WrapperDashboard = Wrapper(Dashboard);
const WrapperOrders = Wrapper(Orders);
const WrapperReports = Wrapper(Reports);
const WrapperIntegrations = Wrapper(Integrations);
const WrapperCustomers = Wrapper(Customers);

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Routes istory={history}>
            
              <Route index path="/" element={<Login/>} key={"login"}/>
              <Route  path="/dashboard" render={()=><WrapperDashboard/>}  key="wrapperDashboard"/>
              <Route  path="/customers" element={<WrapperCustomers/>} key="wrapperCustomers"/>
              <Route  path="/orders" element={<WrapperOrders/>} key="wrapperOrders"/>
              <Route  path="/reports" element={<WrapperReports/>} key="wrapperReports"/>
              <Route  path="/integrations" element={<WrapperIntegrations/>} key="wrapperIntegrations"/>
            
            </Routes>
        </Provider>
      </ThemeProvider>
    );
  }
}

export default App;
