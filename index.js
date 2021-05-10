import { AppRegistry } from "react-native"
import Router from "./js/routes"

AppRegistry.registerComponent("graffitiproject", () => Router)

// The below line is necessary for use with the TestBed App
AppRegistry.registerComponent("ViroSample", () => Router)
