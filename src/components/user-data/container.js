import React from "react";
//import { connect } from "react-redux";
//import PropTypes from "prop-types";

import LikedComponent from './like'
import BookmarkedComponent from './bookemark'
import StoriesComponent from './story'


import { StyleSheet, Text, View, Image, Button } from "react-native";



const styles = StyleSheet.create({
  photo: {
    width: 65,
    height: 55,
  },
  userAccount: {
    flexDirection: 'row',
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    marginBottom: 3,
    borderBottomWidth: 0.5,
    borderBottomColor: '#d6d7da',
  },
  tabList: {

  },
  tabItem: {
    paddingLeft: 20,
    paddingRight: 20, 
    backgroundColor: "red", 
  }
});

class UserDataContainer extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      toggleTab: "liked"
    }

    this.onTabClicked = (tabMode) => {
      this.setState({
        toggleTab: tabMode,
      })
    }
  }
  render() {
    const { toggleTab } = this.state; 
    return (
      <View>
        <View style={styles.userAccount}>
          <Text  
            style={styles.tabItem}
            onPress={() => this.onTabClicked("liked")}>Liked</Text>
          <Text  
            style={styles.tabItem}
            onPress={() => this.onTabClicked("Bookmarked")}>Bookmarked</Text>
          <Text  
            style={styles.tabItem}
            onPress={() => this.onTabClicked("Stories")}>Stories</Text>
        </View>
        {toggleTab === "liked" ? 
          <LikedComponent /> : null }
        {toggleTab === "Bookmarked" ? 
          <BookmarkedComponent /> : null }
        {toggleTab === "Stories" ? 
          <StoriesComponent /> : null }
      </View>
    );
  }
}

export default UserDataContainer; 