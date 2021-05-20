import React, { Component } from "react"
import {
  View,
  TextInput,
  Image,
  ImageBackground,
  TouchableHighlight
} from "react-native"
import { connect } from "react-redux"
import styles from "../styles"

class UploadTag extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      image: null
    }
    this._handleSubmit = this._handleSubmit.bind(this)
  }

  componentDidMount() {
    this.setState({
      image: this.props.myTags[this.props.myTags.length - 1]
    })
  }

  render() {
    console.log(this.state.image)
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.backgroundImage}
          source={require("../res/bg.png")}
        ></ImageBackground>
        <View style={styles.outer}>
          <Image
            style={styles.logo}
            source={require("../res/welcomelogo.png")}
          />
          {this.state.image ? (
            <Image
              style={{ height: "25%", width: "25%" }}
              source={{ uri: this.state.image.uri }}
            />
          ) : null}
          <TextInput
            style={styles.input}
            placeholder="Title"
            autocapitalize="none"
            placeholderTextColor="#000000"
          />

          <TouchableHighlight
            style={styles.sprayCanWrapper}
            underlayColor={"#00000000"}
            onPress={this._reset}
          >
            <Image
              style={styles.img}
              source={require("../res/choosephoto.png")}
            />
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.sprayCanWrapper}
            underlayColor={"#00000000"}
            onPress={this._reset}
          >
            <Image
              style={styles.img}
              source={require("../res/uploadimage.png")}
            />
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor={"#00000000"}
            onPress={() => this.props.history.push("/homebase")}
          >
            <Image
              source={require("../res/gobackhome.png")}
              style={styles.img}
            />
          </TouchableHighlight>
        </View>
      </View>
    )
  }

  _handleSubmit() {}
}

const mapState = state => ({
  myTags: state.myTags
})

export default connect(mapState, null)(UploadTag)
