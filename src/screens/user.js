import React from "react";
//import { connect } from "react-redux";
//import PropTypes from "prop-types";

import { StyleSheet, Text, View } from "react-native";

class UserScreen extends React.Component {
  constructor(props) {
    super(props); 
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>this is user screen</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});


export default UserScreen; 