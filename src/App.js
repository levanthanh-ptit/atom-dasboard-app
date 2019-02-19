import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import { Provider } from 'react-redux'
import store from './redux/store'
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path='/home' component={Home} />
            <Route exact path='/' component={Home} />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}
