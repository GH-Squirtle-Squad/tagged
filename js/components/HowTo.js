import React, { Component } from "react"
import {
  Platform,
  Text,
  View,
  TouchableHighlight,
  Image,
  ScrollView
} from "react-native"
import styles from "../styles"

export default class HowTo extends Component {
  render() {
    return (
      <ScrollView style={{ backgroundColor: "black" }}>
        <View style={styles.howto}>
          <Image source={require("../res/howtoht.png")} />
          <Image source={require("../res/tagginght.png")} />
          <Text style={styles.howToText}>
            So you want to vandalize, but you don't want the consequences. Well, 
            have we got the app for you! Simply "throw up" a piece by tapping
            the "Throw Up" button and enter the virtual realm of graffiti. Tap
            the spray can of your choice to change your color, and move your
            phone like a spraycan to render virtual graffiti in your own world
            through your phone.
          </Text>
          {Platform.OS !== "android" ? (
            <View style={styles.howto}>
              <Image source={require("../res/screenshots.png")} />
              <Text style={styles.howToText}>
                You love your artwork! We don't blame you, its amazing. The
                camera button in view will take a screenshot (after asking
                permission the first time, of course) without those pesky
                spraycans or other buttons showing up to steal the show. 
                Then it'll save it to your personal Camera Roll!
              </Text>

              <Image source={require("../res/galleryht.png")} />
              <Text style={styles.howToText}>
                Upload your piece to the public gallery and show off! Simply
                touch the "Check Pieces Out" button on the Homebase to see the Gallery,
                then press the "Upload" button to send your art to the C L O U D
                which then will render in the public gallery! Voila! You're a
                published artist.
              </Text>
            </View>
          ) : (
            <View>
              <Image source={require("../res/galleryht.png")} />
              <Text style={styles.howToText}>
                Press the "Check Out Pieces" button to admire tags from other
                users from around the globe! (Screenshot and upload options for
                Android coming soon)
              </Text>
            </View>
          )}

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
      </ScrollView>
    )
  }
}
