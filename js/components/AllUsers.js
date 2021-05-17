import React, { Component } from "react"
import { View, ScrollView, Text } from "react-native"
import { Button } from "react-native-elements"
import { connect } from "react-redux"
import { fetchUsers, deleteUser } from "../store/users"
import styles from "../styles"

class AllUsers extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    const users = this.props.users || []
    return (
      <ScrollView style={{ backgroundColor: "black" }}>
        <View>
          <Button
            buttonStyle={styles.homeButton}
            disabledStyle={{
              borderWidth: 2,
              borderColor: "#00F"
            }}
            disabledTitleStyle={{ color: "#00F" }}
            linearGradientProps={null}
            iconContainerStyle={{ background: "#000" }}
            loadingProps={{ animating: true }}
            loadingStyle={{}}
            onPress={() => this.props.history.push("/homebase")}
            title="Return Home"
            titleProps={{}}
            titleStyle={{ marginHorizontal: 5 }}
          />
          <Text style={{ color: "white", height: 50, fontSize: 24 }}>
            All Users
          </Text>
        </View>
        {this.props.isAdmin ? (
          users.map(user => {
            return (
              <View key={user.id}>
                <Text h3 style={{ color: "white" }}>
                  {user.username}
                </Text>
                <Button
                  buttonStyle={{ width: 100 }}
                  containerStyle={{ margin: 5 }}
                  disabledStyle={{
                    borderWidth: 2,
                    borderColor: "#00F"
                  }}
                  disabledTitleStyle={{ color: "#00F" }}
                  linearGradientProps={null}
                  iconContainerStyle={{ background: "#000" }}
                  loadingProps={{ animating: true }}
                  loadingStyle={{}}
                  onPress={() => this.props.deleteUser(user.id)}
                  title="Delete"
                  titleProps={{}}
                  titleStyle={{ marginHorizontal: 5 }}
                />
              </View>
            )
          })
        ) : (
          <Text style={{ color: "white" }}>You shall not pass!</Text>
        )}
      </ScrollView>
    )
  }
}

const mapState = state => ({
  users: state.users,
  isAdmin: state.auth.isAdmin
})

const mapDispatch = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
  deleteUser: id => dispatch(deleteUser(id))
})

export default connect(mapState, mapDispatch)(AllUsers)
