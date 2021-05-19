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
    width: "98%"
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
    // flexWrap: "wrap",
    width: "100%",

  },
    blobsadmin: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    alignContent: "center",
    // flexWrap: "wrap",
    width: "100%",
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
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },
  inner: {
    flex: 1,
    width: "100%",
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
    width: 152,
    borderRadius: 10,
    marginTop: 100
  },
  loginButton: {
    width: 152,
    borderRadius: 10,
    marginBottom: 210
  },

  //Gallery Styling

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
