import React from "react";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";

import {
  StyleSheet, View,  Button,
} from "react-native";


const styles = StyleSheet.create({
  photo: {
    width: 65,
    height: 55,
  },
  userAccount: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: 3,
  },
  name: {
    marginLeft: 10,
  },
  qrCode: {
    marginLeft: "auto",
  },
  qrCodeImg: {
    width: 40,
    height: 33,
  },
});

class LoginByFacebook extends React.Component {
  constructor(props) {
    super(props);
  }

  async logInFB() {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync("293914348077706", {
      permissions: ["public_profile"],
    });
    if (type === "success") {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`,
      );
      Alert.alert(
        "Logged in!",
        `Hi ${(await response.json()).name}!`,
      );
    }
  }

  render() {
    return (
      <View style={styles.userAccount}>
        <Button
          onPress={this.logInFB.bind(this)}
          title="Login By Facebook"
        />
      </View>
    );
  }
}

export default LoginByFacebook;
