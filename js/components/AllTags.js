import React, { Component } from "react"
import { View, Image, ScrollView, Text } from "react-native"
import { Button } from "react-native-elements"
import { connect } from "react-redux"
import { fetchTags, deleteTag } from "../store/tags"
import styles from "../styles"

class AllTags extends Component {
  componentDidMount() {
    this.props.fetchTags()
  }

  render() {
    const tags = this.props.tags || []
    return (
      <ScrollView style={{ backgroundColor: "black" }}>
        <View>
          <Button
            buttonStyle={styles.homeButton}
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
          <Text style={{ color: "white", height: 50, fontSize: 24 }}>
            All Tags
          </Text>
        </View>
        {this.props.isAdmin ? (
          tags.map(tag => {
            return (
              <View key={tag.id}>
                <Image
                  source={{ uri: tag.imageUrl }}
                  style={styles.galleryImage}
                />
                <Text h3 style={{ color: "white" }}>
                  {tag.title}
                </Text>
                <Button
                  buttonStyle={{ width: 100 }}
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
                  onPress={() => this.props.deleteTag(tag.id)}
                  title="Delete"
                  titleProps={{}}
                  titleStyle={{ marginHorizontal: 5 }}
                />
              </View>
            )
          })
        ) : (
          <Text style={{ color: "white" }}>You shall not pass!</Text>
        )}
      </ScrollView>
    )
  }
}

const mapState = state => ({
  tags: state.tags,
  isAdmin: state.auth.isAdmin
})

const mapDispatch = dispatch => ({
  fetchTags: () => dispatch(fetchTags()),
  deleteTag: id => dispatch(deleteTag(id))
})

export default connect(mapState, mapDispatch)(AllTags)
