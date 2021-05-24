import React, { Component } from "react"
import {
  View,
  TextInput,
  Image,
  ImageBackground,
  Text,
  TouchableHighlight
} from "react-native"
import { connect } from "react-redux"
import { uploadTagThunk } from "../store/tags"
import { removeMyTag } from "../store/myTags"
import styles from "../styles"

class UploadTag extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      image: null,
      loading: false,
      error: false
    }

    this.Upload_To_AWS_S3 = this.Upload_To_AWS_S3.bind(this)
  }

  componentDidMount() {
    this.setState({
      image: this.props.myTags[this.props.myTags.length - 1]
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.myTags !== this.props.myTags) {
      this.setState({
        image: this.props.myTags[this.props.myTags.length - 1] || null,
        title: ""
      })
    }
  }

  render() {
    return (
      <View style={{ height: 1000 }}>
        <ImageBackground
          style={styles.backgroundImage}
          source={require("../res/bg.png")}
        ></ImageBackground>

        <View styles={styles.howto}>
          <Image
            style={styles.uploadLogo}
            source={require("../res/welcomelogo.png")}
          />

          {/* statement that renders images if one exists in state */}
          {this.state.image ? (
            <React.Fragment style={styles.uploadForm}>
              <Image
                style={styles.preview}
                source={{ uri: this.state.image.uri }}
              />
              <TextInput
                style={styles.input}
                placeholder="Title"
                autocapitalize="none"
                placeholderTextColor="#000000"
                onChangeText={text => this.setState({ title: text })}
              />
            </React.Fragment>
          ) : (
            <Text style={styles.uploadText}>
              No Screenshots in Camera Roll!
            </Text>
          )}

          {/* upload button */}
          {!this.state.loading ? (
            <View style={styles.outerUpload}>
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
                style={styles.sprayCanWrapper}
                underlayColor={"#00000000"}
                onPress={() => this.props.history.push("/homebase")}
              >
                <Image
                  source={require("../res/gobackhome.png")}
                  style={styles.img}
                />
              </TouchableHighlight>
            </View>
          ) : !this.state.error ? (
            <TouchableHighlight underlayColor={"#00000000"}>
              <Image
                source={require("../res/loading.png")}
                style={styles.img}
              />
            </TouchableHighlight>
          ) : (
            <TouchableHighlight
              underlayColor={"#00000000"}
              onPress={() => this.props.history.push("/upload")}
            >
              <Image
                source={require("../res/tryagain.png")}
                style={styles.img}
              />
            </TouchableHighlight>
          )}
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

    const res = await this.props.uploadTagThunk(file, this.props)
    if (res) {
      this.setState({
        loading: false
      })
      alert("Image added to Gallery!")
      this.props.removeMyTag(this.state.image)
    } else {
      this.setState({
        loading: false,
        error: true
      })
    }
  }
}

const mapState = state => ({
  myTags: state.myTags,
  auth: state.auth
})

const mapDispatch = dispatch => ({
  uploadTagThunk: (data, props) => dispatch(uploadTagThunk(data, props)),
  removeMyTag: tag => dispatch(removeMyTag(tag))
})

export default connect(mapState, mapDispatch)(UploadTag)
