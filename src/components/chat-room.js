import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { StyleSheet, Text, View, Button,
  TextInput, } from "react-native";

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    //const { sendText, sendBot } = props;
    this.state = {
      inputText: "",
    };

    this.handleChange = (text) => {      
      this.setState({
        inputText: text
      });
    };

  }

  render() {
    const { navigation } = this.props;
    const { inputText } = this.state; 
    return (
      <View style={styles.container}>
        <Text>this is the chat room</Text>
        <Text>{inputText}</Text>
        <TextInput
          style={{height: 40, width: 140, borderColor: "gray", borderWidth: 1}}
          onChangeText={(text) => this.handleChange(text)}
          value={inputText}
        />
        <Button 
          title="Go to counter"
          onPress={() => navigation.navigate("Counter")} />
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



ChatRoom.PropTypes = {
  navigation: PropTypes.func.isRequired
};

export default connect(null, null)(ChatRoom); 