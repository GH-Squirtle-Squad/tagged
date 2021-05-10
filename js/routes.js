import React from "react"
import { nativeHistory, NativeRouter, Route } from "react-router-native"
import App from "./App"
import ViroNavigator from "./ViroNavigator"

const Routes = props => {
  return (
    <NativeRouter history={nativeHistory}>
      <Route exact path="/" render={props => <App {...props} />} />
      <Route path="/test" component={ViroNavigator} />
    </NativeRouter>
  )
}

export default Routes
