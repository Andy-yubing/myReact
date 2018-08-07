import React, {Component} from 'react';
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import {
  Router,
  Route,
  Link,
  Switch,
  Prompt
} from 'react-router-dom'
import routerConfig from "./router";
import logo from './logo.svg';
import history from './history';
import './App.css';
// import Header from './components/header'
import {createStore} from 'redux';

class App extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <LocaleProvider locale={zh_CN}>
        <Router history={history}>
          <Switch>
           {
             routerConfig.map(item => (
               <Route path={item.path} key={item.path} exact={item.exact} component={ item.component } />
             ))
           }
           {/* <Redirect from="/" to={stores.currentUser.currentUser ? '/Basic' : '/Login'} /> */}
         </Switch>
        </Router>
      </LocaleProvider>
    );
  }
}

export default App;
