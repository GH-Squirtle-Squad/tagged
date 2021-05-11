import React from "react"
import { nativeHistory, NativeRouter, Route } from "react-router-native"
import { Provider } from "react-redux"
import App from "./components/App"
import ViroNavigator from "./components/ViroNavigator"
import store from "./store"
import Homebase from './components/Homebase'
import Gallery from './components/Gallery'

const Routes = props => {
  return (
    <Provider store={store}>
      <NativeRouter history={nativeHistory}>
        <Route exact path="/" render={props => <App {...props} />} />
        <Route path="/test" component={ViroNavigator} />
        <Route path='/homebase' component={Homebase}/>
        <Route path='/gallery' component={Gallery}/>
      </NativeRouter>
    </Provider>
  )
}

export default Routes
