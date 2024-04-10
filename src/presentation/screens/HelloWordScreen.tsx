import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
// interface props {
//   name?: string;
// }

const HelloWorldScreen = ({name = 'world'}) => {
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} style={styles.title}>
        Hello, {name}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  title: {
    fontSize: 45,
    textAlign: 'center',
    color: 'black',
    padding: 20,
  },
});

export default HelloWorldScreen;
