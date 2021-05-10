import React, { Component } from "react"
// import Nagivator from "./routes/homeStack"
import { Input, Button } from "react-native-elements"

import Icon from "react-native-vector-icons/MaterialCommunityIcons"

import background from "./js/res/image.png"

import { View, Text, StyleSheet, ImageBackground } from "react-native"

import SketchSceneAR from "./js/SketchSceneAR"

// import { NavigationContainer } from "@react-navigation/native"
// import { createStackNavigator } from "@react-navigation/stack"
// import { navigationRef } from "./RootNavigation"

export default class ViroSample extends Component {
  constructor(props) {
    super(props)
    // this.navigate = this.navigate.bind(this)
  }

  // navigate(name, params) {
  //   navigationRef.current && navigationRef.current.navigate(name, params)
  // }

  render() {
    // const navigationRef = React.createRef()
    // const RootStack = createStackNavigator()
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.backgroundImage} source={background}>
          <View style={styles.logoContainer}></View>
        </ImageBackground>

        {/* <View style={localStyles.viroContainer}> */}
        <Text style={styles.logoText}>Welcome to {"<tagged />"}</Text>

        {/* <ImageBackground source={image} style={styles.image}>
          <Text style={styles.text}>Inside</Text>
        </ImageBackground> */}

        <Input
          style={localStyles.inner}
          containerStyle={{}}
          disabledInputStyle={{ background: "#ddd" }}
          inputContainerStyle={{}}
          errorMessage="Oops! that's not correct."
          errorStyle={{}}
          errorProps={{}}
          inputStyle={{}}
          label="User Form"
          labelStyle={{}}
          labelProps={{}}
          leftIcon={<Icon name="account-outline" size={20} />}
          leftIconContainerStyle={{}}
          rightIcon={<Icon name="close" size={20} />}
          rightIconContainerStyle={{}}
          placeholder="UserName"
        />

        <Input
          style={localStyles.inner}
          containerStyle={{}}
          disabledInputStyle={{ background: "#ddd" }}
          inputContainerStyle={{}}
          errorMessage="Oops! that's not correct."
          errorStyle={{}}
          errorProps={{}}
          inputStyle={{}}
          labelStyle={{}}
          labelProps={{}}
          leftIcon={<Icon name="account-outline" size={20} />}
          leftIconContainerStyle={{}}
          rightIcon={<Icon name="close" size={20} />}
          rightIconContainerStyle={{}}
          placeholder="E-mail"
        />

        <Input
          style={localStyles.inner}
          containerStyle={{}}
          disabledInputStyle={{ background: "#ddd" }}
          inputContainerStyle={{}}
          errorMessage="Oops! that's not correct."
          errorStyle={{}}
          errorProps={{}}
          inputStyle={{}}
          labelStyle={{}}
          labelProps={{}}
          leftIcon={<Icon name="account-outline" size={20} />}
          leftIconContainerStyle={{}}
          rightIcon={<Icon name="close" size={20} />}
          rightIconContainerStyle={{}}
          placeholder="Password"
        />

        <Button
          buttonStyle={{ width: 150 }}
          containerStyle={{ margin: 5 }}
          disabledStyle={{
            borderWidth: 2,
            borderColor: "#00F"
          }}
          disabledTitleStyle={{ color: "#00F" }}
          linearGradientProps={null}
          icon={<Icon name="react" size={15} color="#0FF" />}
          iconContainerStyle={{ background: "#000" }}
          loadingProps={{ animating: true }}
          loadingStyle={{}}
          onPress={() => alert("Account Created")}
          title="Create Account"
          titleProps={{}}
          titleStyle={{ marginHorizontal: 5 }}
        />
        <Button
          buttonStyle={{ width: 150 }}
          containerStyle={{ margin: 5 }}
          disabledStyle={{
            borderWidth: 2,
            borderColor: "#00F"
          }}
          disabledTitleStyle={{ color: "#00F" }}
          linearGradientProps={null}
          icon={<Icon name="react" size={15} color="#0FF" />}
          iconContainerStyle={{ background: "#000" }}
          loadingProps={{ animating: true }}
          loadingStyle={{}}
          onPress={() => alert("click")}
          // onPress={() => this.props.navigation.navigate("SketchSceneAR")}
          title="Login"
          titleProps={{}}
          titleStyle={{ marginHorizontal: 5 }}
        />
        {/*
          <ImageBackground
            source={require("./js/res/image.png")}
            style={{ width: "100%", height: "100%", opacity: 0.7 }}
          ></ImageBackground> */}
      </View>
    )
  }
}

var localStyles = StyleSheet.create({
  viroContainer: {
    flex: 1,
    backgroundColor: "purple"
  },
  outer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "gray"
  },
  inner: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white"
  },
  titleText: {
    // paddingTop: 30,
    // paddingBottom: 20,
    // color: "black",
    // textAlign: "center",
    // fontSize: 50
    fontSize: 24,
    fontWeight: "600",
    color: "white"
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20
  },
  buttons: {
    height: 80,
    width: 150,
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#68a0cf",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff"
  },
  exitButton: {
    height: 50,
    width: 100,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#68a0cf",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff"
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "-apple-system, BlinkMacSystemFont Segoe UI",
    justifyContent: "center",
    alignItems: "center"
    // backgroundColor: "orange"
  },
  logoContainer: {
    alignItems: "center"
  },
  logoText: {
    fontSize: 60,
    fontWeight: "900",
    color: "white",
    paddingTop: 30,
    paddingBottom: 20,
    // color: "black",
    textAlign: "center"
    // fontSize: 50
  },
  logoDescription: {
    fontSize: 15,
    fontWeight: "600",
    color: "white"
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    opacity: 0.27
  }
})

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "column"
//   },
//   image: {
//     flex: 1,
//     resizeMode: "cover",
//     justifyContent: "center"
//   },
//   text: {
//     color: "white",
//     fontSize: 42,
//     fontWeight: "bold",
//     textAlign: "center",
//     backgroundColor: "pink"
//   }
// })

module.exports = ViroSample
