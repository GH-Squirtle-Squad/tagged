import { AppRegistry } from "react-native"
import App from "./App.js"
import Router from "./routes/homeStack"

AppRegistry.registerComponent("graffitiproject", () => Router)

// The below line is necessary for use with the TestBed App
AppRegistry.registerComponent("ViroSample", () => Router)
