"use strict"

import React, { Component } from "react"

import {
  ViroARScene,
  ViroPolyline,
  ViroMaterials,
  ViroButton,
  ViroCamera
} from "react-viro"

import { Platform, PermissionsAndroid } from "react-native"

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
    this._takeScreenshot = this._takeScreenshot.bind(this)
    this.requestWriteAccessPermission =
      this.requestWriteAccessPermission.bind(this)
    this.requestReadAccessPermission =
      this.requestReadAccessPermission.bind(this)
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
        <ViroCamera position={[0, 0, 0]} active={true}>
          <ViroButton
            source={require("../res/camerabutton.png")}
            position={[-0, 0.6, -2]}
            height={0.3}
            width={0.3}
            onClick={this._takeScreenshot}
          />
        </ViroCamera>
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

  _reset() {
    this.setState({
      polylines: [],
      points: [[0, 0, -3]]
    })
  }

  async requestWriteAccessPermission() {
    try {
      const granted = await PermissionsAndroid.requestMultiple(
        [
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
        ],
        {
          title: "<tagged/> Write Permission",
          message:
            "<tagged/> needs to access your photos" +
            "so you can record photos of" +
            "your tags.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      )
      if (granted == PermissionsAndroid.RESULTS.GRANTED) {
        this.setState({
          writeAccessPermission: true,
          readAccessPermission: true
        })
      } else {
        this.setState({
          writeAccessPermission: false
        })
      }
    } catch (err) {
      console.warn("[PermissionsAndroid]" + err)
    }
  }

  async requestReadAccessPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: "<tagged/> File Permission",
          message:
            "<tagged/> needs to access your file " +
            "so you can view your tags in the gallery.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      )
      if (granted == PermissionsAndroid.RESULTS.GRANTED) {
        this.setState({
          readAccessPermission: true
        })
      } else {
        this.setState({
          readAccessPermission: false
        })
      }
    } catch (err) {
      console.warn("[PermissionsAndroid]" + err)
    }
  }

  async _takeScreenshot() {
    if (Platform.OS === "android" && !this.state.writeAccessPermission) {
      this.requestWriteAccessPermission()
    }
    await this.props.arSceneNavigator.takeScreenshot("tag", true)
    alert("Piece saved to camera roll!")
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
