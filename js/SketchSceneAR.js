"use strict"

import React, { Component } from "react"

import {
  ViroARScene,
  ViroConstants,
  ViroPolyline,
  ViroMaterials,
  ViroButton
} from "react-viro"

//add texture
ViroMaterials.createMaterials({
  red: { diffuseColor: "red" },
  blue: { diffuseColor: "blue" },
  yellow: { diffuseColor: "yellow" },
  green: { diffuseColor: "green" },
  purple: { diffuseColor: "purple" },
  black: { diffuseColor: "black" },
  white: { diffuseColor: "white" },
  orange: { diffuseColor: "orange" }
})

export default class SketchSceneAR extends Component {
  constructor() {
    super()

    // Set initial state here
    this.state = {
      thickness: 0.1,
      points: [[0, 0, 0]],
      polylines: [],
      drawing: false,
      color: "white"
    }

    // bind 'this' to functions
    this._onCameraARHitTest = this._onCameraARHitTest.bind(this)
    this._toggleDraw = this._toggleDraw.bind(this)
    this._toggleColor = this._toggleColor.bind(this)
  }

  render() {
    return (
      <ViroARScene onCameraARHitTest={this._onCameraARHitTest}>
        <ViroButton
          source={
            !this.state.drawing
              ? require("./res/startdrawing.png")
              : require("./res/stopdrawing.png")
          }
          position={[1, 3, -3]}
          height={1}
          width={1}
          onClick={this._toggleDraw}
          onGaze={this._onButtonGaze}
        />

        <ViroButton
          source={require("./res/purple.png")}
          position={[2, 1, -3]}
          height={3}
          width={3}
          onClick={() => this._toggleColor("purple")}
          onGaze={this._onButtonGaze}
        />
        {this.state.polylines.map((line, i) => (
          <ViroPolyline
            key={i}
            position={[0, 0, -2]}
            points={line.points}
            thickness={this.state.thickness}
            materials={line.color}
          />
        ))}
        <ViroPolyline
          position={[0, 0, -2]}
          points={this.state.points}
          thickness={this.state.thickness}
          materials={this.state.color}
        />
      </ViroARScene>
    )
  }

  _toggleDraw() {
    const current = this.state.drawing
    const points = [...this.state.points]
    if (current) {
      this.setState({
        polylines: [
          ...this.state.polylines,
          { points: points, color: this.state.color }
        ],
        points: [[0, 0, 0]]
      })
    }
    this.setState({
      drawing: !current
    })
  }

  _toggleColor(colorName) {
    console.log("CLICKED COLOR")
    const current = this.state.color
    const points = [...this.state.points]
    if (this.state.color !== colorName) {
      this.setState({
        polylines: [
          ...this.state.polylines,
          { points: points, color: current }
        ],
        points: [[0, 0, 0]]
      })

      this.setState({
        color: colorName
      })
    }
  }

  _onCameraARHitTest(results) {
    if (this.state.drawing) {
      if (results.hitTestResults.length > 0) {
        for (var i = 0; i < results.hitTestResults.length; i++) {
          let result = results.hitTestResults[i]
          if (
            result.type == "ExistingPlaneUsingExtent" ||
            result.type == "FeaturePoint"
          ) {
            this.setState({
              points: [...this.state.points, result.transform.position]
            })
            break
          }
        }
      }
    }
  }
}

module.exports = SketchSceneAR
