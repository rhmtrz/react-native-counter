import React from "react";
//import { connect } from "react-redux";
//import PropTypes from "prop-types";
import LoginByFacebook from '../login/login-fb'; 

import { StyleSheet, Text, View, Image, Button } from "react-native";

const UserIcon = require("../../../assets/user.png");


const styles = StyleSheet.create({
  photo: {
    width: 65,
    height: 55,
  },
  userAccount: {
    flex: 1, 
    flexDirection: 'row',
    alignItems: "center",
    padding: 10,
    marginBottom: 3,
  },
  name: {
    marginLeft: 10, 
  }, 
  qrCode: {
    marginLeft: "auto"
  },
  qrCodeImg: {
    width: 40,
    height: 33,
  },
});

class LikedComponent extends React.Component {

  render() {
    return (
      <View style={styles.userAccount}>
        <LoginByFacebook />
      </View>
    );
  }
}

export default LikedComponent; 