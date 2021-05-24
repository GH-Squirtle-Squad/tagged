"use strict"

import React, { Component } from "react"

import { ViroARScene, ViroPolyline, ViroMaterials } from "react-viro"

//adds color to lines
ViroMaterials.createMaterials({
  red: { diffuseColor: "red" },
  blue: { diffuseColor: "blue" },
  green: { diffuseColor: "green" },
  purple: { diffuseColor: "purple" },
  white: { diffuseColor: "white" },
  orange: { diffuseColor: "orange" }
})

export default class SketchSceneAR extends Component {
  constructor(props) {
    super(props)
    this.state = {
      thickness: 0.1,
      opacity: 0.7,
      points: [[0, 0, -3]],
      polylines: [],
      color: props.arSceneNavigator.viroAppProps.color
    }
    this._onCameraARHitTest = this._onCameraARHitTest.bind(this)
  }

  componentDidUpdate(prevProps) {
    const { drawing, color } = prevProps.arSceneNavigator.viroAppProps
    const { color: oldColor, polylines, points } = this.state

    //statement to change color of lines
    if (color !== oldColor && drawing === "yes") {
      this.setState({
        polylines: [...polylines, { points: points, color: oldColor }],
        points: [],
        color: color
      })
    }

    //to clear lines
    if (drawing === "no" && polylines.length > 0) {
      this.setState({
        polylines: [],
        points: [[0, 0, -3]]
      })
    }

    //to stop drawing
    if (drawing === "paused" && points.length > 1) {
      this.setState({
        polylines: [...polylines, { points: points, color: oldColor }],
        points: []
      })
    }
  }

  render() {
    const viroProps = this.props.arSceneNavigator.viroAppProps
    return (
      // rendering the AR Scene
      <ViroARScene
        onCameraARHitTest={this._onCameraARHitTest}
        ref={this._setARSceneRef}
      >
        {this.state.polylines.map((line, i) => (
          <ViroPolyline
            opacity={this.state.opacity}
            key={i}
            position={[0, 0, -3]}
            points={line.points}
            thickness={this.state.thickness}
            materials={line.color}
          />
        ))}
        {/* current line being drawn in scene */}
        {this.state.points.length > 0 ? (
          <ViroPolyline
            opacity={this.state.opacity}
            position={[0, 0, -3]}
            points={this.state.points}
            thickness={this.state.thickness}
            materials={viroProps.color}
          />
        ) : null}
      </ViroARScene>
    )
  }

  // method to use ARHitTest to render lines in AR
  _onCameraARHitTest(results) {
    if (this.props.arSceneNavigator.viroAppProps.drawing === "yes") {
      if (results.hitTestResults.length > 0) {
        for (var i = 0; i < results.hitTestResults.length; i++) {
          let result = results.hitTestResults[i]
          if (
            result.type == "ExistingPlaneUsingExtent" ||
            result.type == "FeaturePoint" ||
            result.type == "Estimated Horizontal Plane"
          ) {
            this.setState({
              points: [...this.state.points, result.transform.position]
            })
            break
          }
        }
      }
    } else if (results.hitTestResults.length > 0) {
      const last = results.hitTestResults[results.hitTestResults.length - 1]
      this.setState({
        points: [last.transform.position]
      })
    }
  }
}

module.exports = SketchSceneAR
