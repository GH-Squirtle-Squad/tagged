import React, { Component } from "react"
import { ViroARSceneNavigator } from "react-viro"
import SketchSceneAR from "./SketchSceneAR"
import Homebase from './Homebase';

export default class ViroNavigator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navigatorType: "UNSET"
    }
    this._changeNavigator = this._changeNavigator.bind(this)
    this._getARSketch = this._getARSketch.bind(this)
    this._goHome = this._goHome.bind(this)
  }

  render() {
    if (this.state.navigatorType === 'UNSET') {
    return this._getARSketch()
    } else if (this.state.navigatorType === 'HOME') {
      console.log("i got here im just not going home")
      return this._goHome()
    }
  }

  _changeNavigator(type) {
    console.log("i am trying v hard. i got to changeNavigator. \n type: ", type)
    this.setState({
      navigatorType: type,
    })
  }

  _getARSketch() {
    return <ViroARSceneNavigator _changeNavigator={this._changeNavigator} initialScene={{ scene: SketchSceneAR }} />
  }

  _goHome() {
    return <Homebase />
  }
}
