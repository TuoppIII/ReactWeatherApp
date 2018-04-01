import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  combineReducers,
  createStore,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly"

import logo from './logo.svg';
import './App.css';

import WeatherContainer from './containers/WeatherContainer';
import { TextBox } from './components/TextBox';
import { Button } from './components/Button';

import * as reducers from './ducks';

const combinedReducer = combineReducers({ ...reducers });
const appStore = createStore(
  combinedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

class App extends Component {
  render() {
    return (
      <Provider store={appStore}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <TextBox dispatch={appStore.dispatch} city='Vantaa' />
          <Button dispatch={appStore.dispatch} />
          <WeatherContainer ready={false} />
        </div>
      </Provider>
    );
  }
}

export default App;
