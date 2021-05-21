import React, { Component } from 'react'
import {Platform, Text, View, TouchableHighlight, Image} from 'react-native'
import styles from "../styles"


export default class HowTo extends Component {
    render() {
        return (
            <View style={{backgroundColor: "black"}}>
                
<Text h1 style={{color: "white"}}> How To: </Text>
<Text h3 style={{color: "white"}}> Tagging: </Text>
<Text style={{color: "white"}}> So you want to vandalize, but you don't want the consequences. Well. Have we got the app for you. Simply "throw up" 
a piece by tapping the "Throw Up" button and enter the virtual realm of graffiti. Tap the spray can of your choice to change 
your color, and move your phone like a spraycan to render virtual graffiti in your own world through your phone. </Text>
{Platform.OS !== "android" ? (
<View>
<Text h3 style={{color: "white"}}> Screenshots: </Text>
<Text style={{color: "white"}}>
So you love your artwork! We don't blame you, its amazing. The camera button in view will take a screenshot 
(after asking permission the first time, of course) without those pesky spraycans or other buttons involved then save it to your personal 
Camera Roll!
</Text>

<Text h3 style={{color: "white"}}> Gallery: </Text>
<Text style={{color: "white"}}>
Upload your piece to the public gallery and show off! Simply touch the "Check Pieces Out" on the Homebase to see the Gallery, then press the 
"Upload" button to send your art to the C L O U D which then will render in the public gallery! Voila! You're a published artist.
</Text>
</View>
) : (
<View>
<Text h3 style={{color: "white"}}> Gallery: </Text>
<Text style={{color: "white"}}>
Press the "Check Out Pieces" button to admire tags from other users from around the globe! (Screenshot and upload options
for Android coming soon)
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
        )
    }
}
