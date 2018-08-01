import React from 'react';
import { connect } from 'react-redux';

import { StyleSheet, Text, View, Button } from 'react-native';
import { countUp } from '../redux/reducer/pageDataReducer'; 

class Counter extends React.Component {
  constructor(props) {
    super(props); 
  }

  render() {
    const { count, countUp} = this.props
    return (
      <View style={styles.container}>
        <Text>this is counter Component</Text>
        <Button 
          title="Count Up"
          onPress={countUp} />
        <Text>{count}</Text>
        <Button title="Count Down" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = state => {
  const { count } = state.pageData
  return {
    count
  }
}

const mapDispatchToProps = dispatch => {
  return {
    countUp: () => dispatch(countUp())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter); 