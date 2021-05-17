import React from "react"
import { nativeHistory, NativeRouter, Route } from "react-router-native"
import { Provider } from "react-redux"
import App from "./components/App"
import ViroNavigator from "./components/ViroNavigator"
import store from "./store"
import Homebase from "./components/Homebase"
import Gallery from "./components/Gallery"
import UploadTag from "./components/UploadTag"
import AllUsers from "./components/AllUsers"
import AllTags from "./components/AllTags"

const Routes = props => {
  console.disableYellowBox = true
  return (
    <Provider store={store}>
      <NativeRouter history={nativeHistory}>
        <Route exact path="/" render={props => <App {...props} />} />
        <Route
          exact
          path="/tag"
          render={props => <ViroNavigator {...props} />}
        />
        <Route path="/homebase" component={Homebase} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/upload" component={UploadTag} />
        <Route path="/users" component={AllUsers} />
        <Route path="/tags" component={AllTags} />
      </NativeRouter>
    </Provider>
  )
}

export default Routes
