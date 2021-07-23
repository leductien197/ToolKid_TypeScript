import 'react-native-gesture-handler';
import React from 'react'
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Navigation from './src/navigation';

const App: React.FC = () => {

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </Provider>
  );
}
export default App;