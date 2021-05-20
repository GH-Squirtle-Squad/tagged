"use strict"

import React, { Component } from "react"

import { ViroARScene, ViroPolyline, ViroMaterials } from "react-viro"

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
  constructor(props) {
    super(props)

    // Set initial state here
    this.state = {
      thickness: 0.2,
      points: [[0, 0, -3]],
      polylines: [],
      writeAccessPermission: false,
      readAccessPermission: false,
      color: props.arSceneNavigator.viroAppProps.color
    }

    // bind 'this' to functions
    this._onCameraARHitTest = this._onCameraARHitTest.bind(this)
  }

  componentDidUpdate(prevProps) {
    const { drawing, color } = prevProps.arSceneNavigator.viroAppProps
    const { color: oldColor, polylines, points } = this.state
    if (color !== oldColor && drawing) {
      this.setState({
        polylines: [...polylines, { points: points, color: oldColor }],
        points: [[0, 0, -3]],
        color: color
      })
    }

    if (!drawing && polylines.length > 0) {
      this.setState({
        polylines: [],
        points: [[0, 0, -3]]
      })
    }
  }

  render() {
    const viroProps = this.props.arSceneNavigator.viroAppProps
    return (
      <ViroARScene onCameraARHitTest={this._onCameraARHitTest}>
        {this.state.polylines.map((line, i) => (
          <ViroPolyline
            key={i}
            position={[0, 0, -3]}
            points={line.points}
            thickness={this.state.thickness}
            materials={line.color}
          />
        ))}
        <ViroPolyline
          position={[0, 0, -3]}
          points={this.state.points}
          thickness={this.state.thickness}
          materials={viroProps.color}
        />
      </ViroARScene>
    )
  }

  _onCameraARHitTest(results) {
    if (this.props.arSceneNavigator.viroAppProps.drawing) {
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
    }
  }
}

module.exports = SketchSceneAR
