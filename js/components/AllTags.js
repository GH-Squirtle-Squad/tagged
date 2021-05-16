import React, { Component } from "react"
import { View, Image, ScrollView, Text } from "react-native"
import { Button } from "react-native-elements"
import { connect } from "react-redux"
import { fetchTags } from "../store/tags"
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
          <Text
            style={{ marginTop: 100, color: "white", height: 50, fontSize: 24 }}
          >
            All Tags
          </Text>
        </View>
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
                onPress={() => console.log("delete pressed")}
                title="Delete"
                titleProps={{}}
                titleStyle={{ marginHorizontal: 5 }}
              />
            </View>
          )
        })}
      </ScrollView>
    )
  }
}

const mapState = state => ({
  tags: state.tags
})

const mapDispatch = dispatch => ({
  fetchTags: () => dispatch(fetchTags())
})

export default connect(mapState, mapDispatch)(AllTags)
