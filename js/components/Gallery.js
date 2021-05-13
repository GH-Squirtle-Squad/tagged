import React, { Component } from "react"
import { connect } from "react-redux"
import { View, Text, Image, ImageBackground, ScrollView } from "react-native"
import { Button } from "react-native-elements"
import styles from "../styles"
import { fetchTags } from "../store/tags"

class Gallery extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.fetchTags()
  }

  render() {
    const tags = this.props.tags || []
    return (
      <ScrollView style={styles.blackBG}>
        <Image style={styles.logo} source={require("../res/welcomelogo.png")} />
        <Button
          buttonStyle={styles.button}
          containerStyle={{ margin: 5 }}
          disabledStyle={{
            borderWidth: 2,
            borderColor: "#00F"
          }}
          disabledTitleStyle={{ color: "#00F" }}
          linearGradientProps={null}
          iconContainerStyle={{ background: "#000" }}
          loadingProps={{ animating: true }}
          loadingStyle={{}}
          onPress={() => this.props.history.push("/upload")}
          title="Upload Your Tag"
          titleProps={{}}
          titleStyle={{ marginHorizontal: 5 }}
        />
        <Button
          buttonStyle={styles.button}
          containerStyle={{ margin: 5 }}
          disabledStyle={{
            borderWidth: 2,
            borderColor: "#00F"
          }}
          disabledTitleStyle={{ color: "#00F" }}
          linearGradientProps={null}
          iconContainerStyle={{ background: "#000" }}
          loadingProps={{ animating: true }}
          loadingStyle={{}}
          onPress={() => this.props.history.push("/homebase")}
          title="Return Home"
          titleProps={{}}
          titleStyle={{ marginHorizontal: 5 }}
        />
        {tags.map(tag => {
          return (
            <View key={tag.id}>
              <Image
                source={{ uri: tag.imageUrl }}
                style={styles.galleryImage}
              />
              <Text h3 style={{ color: "white" }}>
                {tag.title}
              </Text>
            </View>
          )
        })}
      </ScrollView>
    )
  }
}

const mapStateToProps = state => ({
  tags: state.tags
})

const mapDispatchToProps = dispatch => ({
  fetchTags: () => dispatch(fetchTags())
})

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)
