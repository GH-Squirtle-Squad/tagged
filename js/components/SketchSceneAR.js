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
      thickness: 0.2,
      points: [[0, 0, -3]],
      polylines: [],
      writeAccessPermission: false,
      readAccessPermission: false,
      color: props.arSceneNavigator.viroAppProps.color
    }
    this._onCameraARHitTest = this._onCameraARHitTest.bind(this)
  }

  componentDidUpdate(prevProps) {
    const { drawing, color } = prevProps.arSceneNavigator.viroAppProps
    const { color: oldColor, polylines, points } = this.state

//statement to change color of lines
    if (color !== oldColor && drawing) {
      this.setState({
        polylines: [...polylines, { points: points, color: oldColor }],
        points: [[0, 0, -3]],
        color: color
      })
    }

//to clear lines
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

// rendering the AR Scene     
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

{/* lines to be rendered within AR scene         */}
        <ViroPolyline
          position={[0, 0, -3]}
          points={this.state.points}
          thickness={this.state.thickness}
          materials={viroProps.color}
        />
      </ViroARScene>
    )
  }

// method to use ARHitTest to render lines in AR 
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
