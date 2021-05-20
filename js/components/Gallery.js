import React, { Component } from "react"
import { connect } from "react-redux"
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  ScrollView,
  TouchableHighlight,
  Image
} from "react-native"
import styles from "../styles"
import { fetchTags } from "../store/tags"

const Item = ({ key, imageUrl, title }) => {
  console.log(imageUrl)
  return (
    <View key={key}>
      <Image source={{ uri: imageUrl }} style={styles.galleryImage} />
      <Text h3 style={styles.shadow}>
        {title}
      </Text>
    </View>
  )
}

class Gallery extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.fetchTags()
  }

  render() {
    const tags = this.props.tags || []

    const renderItem = ({ item }) => {
      console.log(item)
      return <Item key={item.id} imageUrl={item.imageUrl} title={item.title} />
    }
    return (
      <ScrollView>
        <ImageBackground
          style={styles.backgroundImage}
          source={require("../res/bg.png")}
        ></ImageBackground>
        <Image style={styles.logo} source={require("../res/welcomelogo.png")} />

        {/* upload button  */}
        <View style={styles.gallbuttons}>
          <TouchableHighlight
            underlayColor={"#00000000"}
            onPress={() => this.props.history.push("/upload")}
          >
            <Image source={require("../res/upload.png")} style={styles.img} />
          </TouchableHighlight>

          {/* return to home button         */}

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

        {/* gallery       */}
        <View style={styles.gallflex}>
          <FlatList
            data={tags}
            keyExtractor={tag => `${tag.id}`}
            renderItem={renderItem}
          />
          {/* {tags.map(tag => {
          return (
            <View key={tag.id}>
              <Image
                source={{ uri: tag.imageUrl }}
                style={styles.galleryImage}
              />
              <Text h3 style={styles.shadow}>
                {tag.title}
              </Text>
            </View>
          )
        })} */}
        </View>
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
