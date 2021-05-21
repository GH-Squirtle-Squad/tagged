import React, { Component } from "react"
import {
  View,
  TextInput,
  Image,
  ImageBackground,
  TouchableHighlight
} from "react-native"
import { connect } from "react-redux"
import { uploadTagThunk } from "../store/tags"
import styles from "../styles"

class UploadTag extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      image: null,
      loading: false
    }

    this.Upload_To_AWS_S3 = this.Upload_To_AWS_S3.bind(this)
  }

  componentDidMount() {
    this.setState({
      image: this.props.myTags[this.props.myTags.length - 1]
    })
  }

  render() {
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

{/* statement that renders images if one exists in state */}
          {this.state.image ? (
            <Image
              style={{ height: "25%", width: "25%" }}
              source={{ uri: this.state.image.uri }}
            />
          ) : null}

{/* title input */}
          <TextInput
            style={styles.input}
            placeholder="Title"
            autocapitalize="none"
            placeholderTextColor="#000000"
            onChangeText={text => this.setState({ title: text })}
          />

{/* upload button */}
          <TouchableHighlight
            style={styles.sprayCanWrapper}
            underlayColor={"#00000000"}
            onPress={this.Upload_To_AWS_S3}
          >
            <Image
              style={styles.img}
              source={require("../res/uploadimage.png")}
            />
          </TouchableHighlight>

{/* go home button */}
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

// async method to upload to AWS
  async Upload_To_AWS_S3(e) {
    e.preventDefault()
    this.setState({
      loading: true
    })

    const file = {
      uri: this.state.image.uri,
      title: this.state.title,
      name: this.state.title,
      type: "image/png",
      userId: this.props.auth.id
    }
    this.props.uploadTagThunk(file, this.props)
  }
}

const mapState = state => ({
  myTags: state.myTags,
  auth: state.auth
})

const mapDispatch = dispatch => ({
  uploadTagThunk: (data, props) => dispatch(uploadTagThunk(data, props))
})

export default connect(mapState, mapDispatch)(UploadTag)
