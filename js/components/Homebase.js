import React, { Component } from "react"
import { connect } from "react-redux"
import { Button } from "react-native-elements"
import { View, Image, ImageBackground, TouchableHighlight, ScrollView } from "react-native"
import background from "../res/image.png"
import styles from "../styles"
import { logout } from "../store/auth"

class Homebase extends Component {
  render() {
    return (
      <ScrollView fadingEdgeLength={1} >
     <View style={styles.homebasecontainer}>
        <ImageBackground style={styles.homebasebackgroundImage} 
        source={require("../res/black.jpeg")}>
          <View style={styles.hblogoContainer}></View>
        </ImageBackground>
        <View style={styles.homebaseouter}>
          <Image
            style={styles.logo}
            source={require("../res/welcomelogo.png")}
          />

  {/* throw up button */}
          <View style={styles.blobs}>
           <TouchableHighlight
            underlayColor={"#00000000"}
            onPress={() => this.props.history.push("/tag")}
          >
            <Image
              source={require("../res/throwup.png")}
               style={styles.img}
            />
          </TouchableHighlight>
            

  {/* tag gallery button   */}
          <TouchableHighlight
            underlayColor={"#00000000"}
            onPress={() => this.props.history.push("/gallery")}
          >
            <Image
              source={require("../res/checkout.png")}
              style={styles.img}
            />
          </TouchableHighlight>
          </View>
          
  {/* logout button  */}
             <TouchableHighlight
            underlayColor={"#00000000"}
            onPress={() => this.props.logout(this.props.history)}
            >        
            <Image
              source={require("../res/logout.png")}
              style={styles.img}

            />
          </TouchableHighlight>

          {this.props.isAdmin ? (
            <View>

  {/* admin users button  */}
          <View style={styles.blobsadmin}>
           <TouchableHighlight
            underlayColor={"#00000000"}
            onPress={() => this.props.history.push("/users")}
          >
            <Image
              source={require("../res/adminnusers.png")}
              style={styles.imgad}
            />
          </TouchableHighlight>

  {/* admin tags button */}
          <TouchableHighlight
            underlayColor={"#00000000"}
            onPress={() => this.props.history.push("/tags")}
          >
            <Image
              style={styles.imgad}
              source={require("../res/admintags.png")}
            />
          </TouchableHighlight>
            </View>
            </View>
          ) : null}
        </View>
      </View>
      </ScrollView>
    )
  }
}

const mapState = state => ({
  isAdmin: state.auth.isAdmin
})

const mapDispatch = dispatch => ({
  logout: history => dispatch(logout(history))
})

export default connect(mapState, mapDispatch)(Homebase)
