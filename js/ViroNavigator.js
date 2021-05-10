import React, { Component } from "react"
import { ViroARSceneNavigator } from "react-viro"
import SketchSceneAR from "./SketchSceneAR"

export default class ViroNavigator extends Component {
  constructor(props) {
    super(props)
    this._getARSketch = this._getARSketch.bind(this)
  }

  render() {
    return this._getARSketch()
  }

  _getARSketch() {
    return <ViroARSceneNavigator initialScene={{ scene: SketchSceneAR }} />
  }
}
