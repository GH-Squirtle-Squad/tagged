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
      points: [],
      polylines: [],
      position: [],
      color: props.arSceneNavigator.viroAppProps.color
    }
    this._onCameraARHitTest = this._onCameraARHitTest.bind(this)
  }

  componentDidUpdate(prevProps) {
    const { drawing, color } = prevProps.arSceneNavigator.viroAppProps
    const { color: oldColor, polylines, points, position } = this.state

    //statement to change color of lines
    if (color !== oldColor && drawing === "yes") {
      this.setState({
        polylines: [
          ...polylines,
          { points: points, color: oldColor, position: position }
        ],
        points: [],
        color: color
      })
    }

    //to clear lines
    if (drawing === "no" && polylines.length > 0) {
      this.setState({
        polylines: [],
        points: [],
        position: []
      })
    }

    //to stop drawing
    if (drawing === "paused" && points.length > 1) {
      this.setState({
        polylines: [
          ...polylines,
          { points: points, color: oldColor, position: position }
        ],
        points: [],
        position: []
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
            position={line.position}
            scale={[3, 3, 1]}
            points={line.points}
            thickness={this.state.thickness}
            materials={line.color}
          />
        ))}
        {/* current line being drawn in scene */}
        {this.state.points.length > 0 ? (
          <ViroPolyline
            opacity={this.state.opacity}
            position={this.state.position}
            scale={[3, 3, 1]}
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
      const current = results.cameraOrientation.forward
      this.setState({
        points: [...this.state.points, current]
      })
    } else if (results) {
      const current = results.cameraOrientation.forward
      this.setState({
        points: [current],
        position: current
      })
    }
  }
}

module.exports = SketchSceneAR
