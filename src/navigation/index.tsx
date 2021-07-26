import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {useSelector, useDispatch} from 'react-redux';
import { SCREEN_NAME } from './ScreenName';
import LoginScreen from '../screens/auth/layout/LoginScreen';
import RegisterScreen from '../screens/auth/layout/RegisterScreen';
import ForgotPasswordScreen from '../screens/auth/layout/ForgotPasswordScreen';
import ProductDetailScreen from '../screens/product/layout/ProductDetailScreen';
import { ScrollView } from 'react-native';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name={SCREEN_NAME.LoginScreen} component={LoginScreen} />
        <Stack.Screen name={SCREEN_NAME.ProductDetailScreen} component={ProductDetailScreen} />
        <Stack.Screen
          name={SCREEN_NAME.RegisterScreen}
          component={RegisterScreen}
        />

        <Stack.Screen name={SCREEN_NAME.ForgotPasswordScreen} component={ForgotPasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// function ModalStack() {
//   return (
//     <Stack.Navigator
//       initialRouteName="MainStackScreen"
//       headerMode="none"
//       mode="modal">
//       <Stack.Screen name="MainStackScreen" component={MainStackScreen} />
//     </Stack.Navigator>
//   );
// }

// function MainStackScreen() {
//   return (
//     <Stack.Navigator headerMode="none" initialRouteName={ScreenTypes.Main}>
//       <Stack.Screen name={ScreenTypes.Main} component={Main} />
//       {/* <Stack.Screen name={'AppPJ'} component={AppPJ} /> */}
//     </Stack.Navigator>
//   );
// }

export default App;
