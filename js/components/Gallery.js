import React, { Component } from "react"
import { connect } from "react-redux"
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  ScrollView,
  TouchableHighlight,
  Image,
  Platform
} from "react-native"
import styles from "../styles"
import { fetchTags } from "../store/tags"

// functional component to create gallery images in FlatList

const Item = ({ imageUrl, title }) => {
  return (
    <View>
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

// functional component to render gallery images in FlatList

    const renderItem = ({ item }) => {
      return <Item imageUrl={item.imageUrl} title={item.title} />
    }
    return (
      <ScrollView>

        <ImageBackground
          style={styles.backgroundImage}
          source={require("../res/bg.png")}
        ></ImageBackground>

        <Image style={styles.logo} source={require("../res/welcomelogo.png")} />
        <View style={styles.gallbuttons}>

{/* upload button  */}
{Platform.OS !== "android" ? (
          <TouchableHighlight
            underlayColor={"#00000000"}
            onPress={() => this.props.history.push("/upload")}
          >
            <Image source={require("../res/upload.png")} style={styles.img} />
          </TouchableHighlight>
          ) : (null)

}

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
            initialNumToRender={2}
          />
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
