// import React, { Component } from "react"
// import { Input, Button } from "react-native-elements"
// import background from "./res/image.png"
// import { View, Text, StyleSheet, ImageBackground } from "react-native"

// export default class ViroSample extends Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <ImageBackground style={styles.backgroundImage} source={background}>
//           <View style={styles.logoContainer}></View>
//         </ImageBackground>

//         <Text style={styles.logoText}>Welcome to {"<tagged />"}</Text>

//         <Input
//           style={localStyles.inner}
//           containerStyle={{}}
//           disabledInputStyle={{ background: "#ddd" }}
//           inputContainerStyle={{}}
//           errorMessage="Oops! that's not correct."
//           errorStyle={{}}
//           errorProps={{}}
//           inputStyle={{}}
//           label="User Form"
//           labelStyle={{}}
//           labelProps={{}}
//           leftIconContainerStyle={{}}
//           rightIconContainerStyle={{}}
//           placeholder="UserName"
//         />

//         <Input
//           style={localStyles.inner}
//           containerStyle={{}}
//           disabledInputStyle={{ background: "#ddd" }}
//           inputContainerStyle={{}}
//           errorMessage="Oops! that's not correct."
//           errorStyle={{}}
//           errorProps={{}}
//           inputStyle={{}}
//           labelStyle={{}}
//           labelProps={{}}
//           leftIconContainerStyle={{}}
//           rightIconContainerStyle={{}}
//           placeholder="E-mail"
//         />

//         <Input
//           style={localStyles.inner}
//           containerStyle={{}}
//           disabledInputStyle={{ background: "#ddd" }}
//           inputContainerStyle={{}}
//           errorMessage="Oops! that's not correct."
//           errorStyle={{}}
//           errorProps={{}}
//           inputStyle={{}}
//           labelStyle={{}}
//           labelProps={{}}
//           leftIconContainerStyle={{}}
//           rightIconContainerStyle={{}}
//           placeholder="Password"
//         />

//         <Button
//           buttonStyle={{ width: 150 }}
//           containerStyle={{ margin: 5 }}
//           disabledStyle={{
//             borderWidth: 2,
//             borderColor: "#00F"
//           }}
//           disabledTitleStyle={{ color: "#00F" }}
//           linearGradientProps={null}
//           iconContainerStyle={{ background: "#000" }}
//           loadingProps={{ animating: true }}
//           loadingStyle={{}}
//           onPress={() => alert("Account Created")}
//           title="Create Account"
//           titleProps={{}}
//           titleStyle={{ marginHorizontal: 5 }}
//         />
//         <Button
//           buttonStyle={{ width: 150 }}
//           containerStyle={{ margin: 5 }}
//           disabledStyle={{
//             borderWidth: 2,
//             borderColor: "#00F"
//           }}
//           disabledTitleStyle={{ color: "#00F" }}
//           linearGradientProps={null}
//           iconContainerStyle={{ background: "#000" }}
//           loadingProps={{ animating: true }}
//           loadingStyle={{}}
//           onPress={() => alert("click")}
//           title="Login"
//           titleProps={{}}
//           titleStyle={{ marginHorizontal: 5 }}
//         />
//         <Button
//           buttonStyle={{ width: 150 }}
//           containerStyle={{ margin: 5 }}
//           disabledStyle={{
//             borderWidth: 2,
//             borderColor: "#00F"
//           }}
//           disabledTitleStyle={{ color: "#00F" }}
//           linearGradientProps={null}
//           iconContainerStyle={{ background: "#000" }}
//           loadingProps={{ animating: true }}
//           loadingStyle={{}}
//           onPress={() => this.props.history.push("/test")}
//           title="Test"
//           titleProps={{}}
//           titleStyle={{ marginHorizontal: 5 }}
//         />
//       </View>
//     )
//   }
// }

// var localStyles = StyleSheet.create({
//   viroContainer: {
//     flex: 1,
//     backgroundColor: "purple"
//   },
//   outer: {
//     flex: 1,
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "gray"
//   },
//   inner: {
//     flex: 1,
//     flexDirection: "column",
//     alignItems: "center",
//     backgroundColor: "white"
//   },
//   titleText: {
//     fontSize: 24,
//     fontWeight: "600",
//     color: "white"
//   },
//   buttonText: {
//     color: "#fff",
//     textAlign: "center",
//     fontSize: 20
//   },
//   buttons: {
//     height: 80,
//     width: 150,
//     paddingTop: 20,
//     paddingBottom: 20,
//     marginTop: 10,
//     marginBottom: 10,
//     backgroundColor: "#68a0cf",
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: "#fff"
//   },
//   exitButton: {
//     height: 50,
//     width: 100,
//     paddingTop: 10,
//     paddingBottom: 10,
//     marginTop: 10,
//     marginBottom: 10,
//     backgroundColor: "#68a0cf",
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: "#fff"
//   }
// })

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     fontFamily: "-apple-system, BlinkMacSystemFont Segoe UI",
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   logoContainer: {
//     alignItems: "center"
//   },
//   logoText: {
//     fontSize: 60,
//     fontWeight: "900",
//     color: "white",
//     paddingTop: 30,
//     paddingBottom: 20,
//     textAlign: "center"
//   },
//   logoDescription: {
//     fontSize: 15,
//     fontWeight: "600",
//     color: "white"
//   },
//   backgroundImage: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     bottom: 0,
//     right: 0,
//     opacity: 0.9
//   }
// })
