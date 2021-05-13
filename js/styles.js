import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "-apple-system, BlinkMacSystemFont Segoe UI",
    justifyContent: "center",
    alignItems: "center"
  },
  logoContainer: {
    alignItems: "center"
  },
  logo: {
    marginTop: 40,
    resizeMode: "contain",
    width: "98%"
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    opacity: 0.9
  },
  button: {
    borderRadius: 96
  },
  signButton: {
    width: 152,
    borderRadius: 10,
    marginTop: 100
  },
  loginButton: {
    width: 152,
    borderRadius: 10,
    marginBottom: 210
  },
  outer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },
  inner: {
    flex: 1,
    width: "100%",
    marginBottom: 50
  },
  input: {
    backgroundColor: "white",
    borderRadius: 10,
    height: 40,
    width: "90%",
    margin: 15
  },
  blackBG: {
    backgroundColor: "black"
  },
  galleryImage: {
    shadowColor: "cyan",
    shadowOffset: {
      width: 100,
      height: 177
    },
    shadowOpacity: 0.8,
    shadowRadius: 19.19,

    // elevation: 23,
    width: 200,
    height: 210
  }
})

export default styles
