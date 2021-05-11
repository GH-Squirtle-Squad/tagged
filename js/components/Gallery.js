import React, { Component } from 'react'
import { connect } from 'react-redux'
import {View, Text, Image, ImageBackground} from 'react-native'
import styles from '../styles'



export class Gallery extends Component {
    render() {
        return (
            <View>
               <Image
            style={styles.logo}
            source={require("../res/welcomelogo.png")}
          />
            </View>
        )
    }
}

// const mapStateToProps = (state) => ({
    
// })

// const mapDispatchToProps = {
    
// }

export default Gallery
