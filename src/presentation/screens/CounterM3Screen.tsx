import React, {useState} from 'react';
import {Text, View} from 'react-native';
import globalStyles from '../theme/globalStyles';
import {FAB} from 'react-native-paper';

const CounterM3Screen = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.title}>{count}</Text>
      <View style={globalStyles.containerButtons}>
        <FAB
          icon="add-outline"
          style={globalStyles.fab}
          onPress={() => setCount(count + 1)}
        />
        <FAB
          icon="refresh-outline"
          style={globalStyles.fab}
          onPress={() => setCount(0)}
        />
        <FAB
          icon="remove-outline"
          style={globalStyles.fab}
          onPress={() => setCount(count - 1)}
        />
      </View>
    </View>
  );
};

export default CounterM3Screen;
