import React from "react";
//import { connect } from "react-redux";
//import PropTypes from "prop-types";
import UserAccount from "../components/profile/profile"; 
import UserDataContainer from "../components/user-data/container"; 

import { StyleSheet, Text, View } from "react-native";

class UserScreen extends React.Component {
  constructor(props) {
    super(props); 
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.userAccount}>
          <UserAccount />
        </View>
        <UserDataContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    
  },
  userAccount: {
    height: 80,
  }
});


export default UserScreen; 