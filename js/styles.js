import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
  // HomeBase Styling
  homebasecontainer: {
    fontFamily: "-apple-system, BlinkMacSystemFont Segoe UI",
    justifyContent: "center",
    alignItems: "center",
    height: 1000
  },
  homebaseouter: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },
  hblogoContainer: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    alignContent: "flex-start"
  },
  logo: {
    resizeMode: "contain",
    width: "98%",
    height: 250
  },
  homebasebackgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    opacity: 0.9,
    height: "100%"
  },
  blobs: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    alignContent: "center",
    width: "100%"
  },
  blobs2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    alignContent: "center",
    width: "100%"
  },
  blobsadmin: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    alignContent: "center",
    width: "100%"
  },
  img: {
    resizeMode: "contain",
    height: 150,
    width: 150
  },
  imgad: {
    resizeMode: "contain",
    height: 100,
    width: 200
  },
  //AR Nav Styling
  logoContainer: {
    alignItems: "center"
  },
  goHome: {
    resizeMode: "contain",
    height: "50%"
  },
  nevermind: {
    resizeMode: "contain",
    height: "100%",
    width: 200
  },
  stopDrawing: {
    resizeMode: "contain",
    height: "80%",
    width: 200
  },
  sprayCanWrapper: {
    backgroundColor: "#00000000",
    height: 80
  },
  sprayCan: {
    height: "100%",
    resizeMode: "contain"
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    opacity: 0.9,
    height: "100%"
  },
  //App Styling
  container: {
    flex: 1,
    fontFamily: "-apple-system, BlinkMacSystemFont Segoe UI",
    justifyContent: "center",
    alignItems: "center",
    height: 1500
  },
  outer: {
    flex: 2,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },
  inner: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    backgroundColor: "white",
    borderRadius: 10,
    height: 40,
    width: "90%",
    margin: 15
  },
  preview: {
    resizeMode: "contain",
    height: "50%"
  },
  button: {
    borderRadius: 96
  },
  homeButton: {
    marginTop: 50,
    marginBottom: 10,
    width: 152
  },
  signButton: {
    width: 250,
    height: 200,
    resizeMode: "contain",
    flex: 2
  },
  loginButton: {
    width: 152,
    borderRadius: 10,
    marginBottom: 210
  },
  //Gallery Styling
  gallflex: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 700
  },
  galleryImage: {
    width: 200,
    height: 210
  },
  shadow: {
    color: "white",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    textShadowColor: "#9bc44f",
    textAlign: "center"
  },
  gallbuttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    alignContent: "center",
    width: "100%"
  },
  //how to page
  howto: {
    fontFamily: "-apple-system, BlinkMacSystemFont Segoe UI",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30
  },
  howToText: {
    color: "white",
    marginLeft: 15,
    marginRight: 15
  },
  //upload styling
  uploadLogo: {
    resizeMode: "contain",
    height: 250,
    width: 400
  },
  uploadText: {
    color: "white",
    alignSelf: "center",
    marginBottom: 20
  },
  outerUpload: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%"
  },
  preview: {
    height: "25%",
    width: "25%",
    alignSelf: "center"
  }
})
export default styles
