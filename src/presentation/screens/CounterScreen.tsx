import React, {useState} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
// import PrimaryButton from '../components/shared/PrimaryButton';
import {Button} from 'react-native-paper';

const CounterScreen = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{count}</Text>
      <View style={styles.containerButtons}>
        {/* <PrimaryButton
                label="+1"
                onPress={ () => setCount(count + 1) }
            /> */}
        <Button
          onPress={() => setCount(count + 1)}
          onLongPress={() => setCount(0)}
          mode="contained">
          Incrementar
        </Button>
        {/* <PrimaryButton
                label="Reiniciar"
                onPress={ () => setCount(0) }
            />
            <PrimaryButton
                label="-1"
                onPress={ () => setCount(count - 1) }
            /> */}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerButtons: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 80,
    fontWeight: '300',
    color: 'black',
  },
  titleCount: {
    color: 'white',
  },
  button: {
    backgroundColor: Platform.OS === 'android' ? '#5856D6' : 'white',
    padding: 20,
    paddingVertical: 10,
    borderRadius: 10,
    color: 'white',
  },
  buttonPressed: {
    backgroundColor: Platform.OS === 'android' ? '#4746AB' : 'white',
  },
});

export default CounterScreen;
