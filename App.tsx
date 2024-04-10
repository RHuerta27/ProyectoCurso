/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
// import HelloWorldScreen from './src/presentation/screens/HelloWordScreen';
// import CounterScreen from './src/presentation/screens/CounterScreen';
import {PaperProvider} from 'react-native-paper';
import CounterM3Screen from './src/presentation/screens/CounterM3Screen';
import IonIcon from 'react-native-vector-icons/Ionicons';

function App(): React.JSX.Element {
  return (
    <PaperProvider
      settings={{
        icon: props => <IonIcon {...props} />,
      }}>
      <SafeAreaView style={{flex: 1}}>
        {/* <HelloWorldScreen name='Raul Huerta Juarez'/> */}
        {/* <CounterScreen /> */}
        <CounterM3Screen />
      </SafeAreaView>
    </PaperProvider>
  );
}

export default App;
