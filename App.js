
import 'react-native-gesture-handler'; 
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Screens/LoginScreen';
import ProductScreen from './Screens/ProductScreen';
import { Provider } from 'react-redux';
import { createStore } from 'redux' ;
import rootReducer from './App/Reducers/UserReducers'
const Stack = createStackNavigator ();

export default function App ()
{
  const store = createStore(rootReducer);
  return (
   
      
    <Provider store = {store} >

   <NavigationContainer>
      <Stack.Navigator>
      
  <Stack.Screen name="LogIn" component={LoginScreen} /> 
        <Stack.Screen name="ProductScreen" component={ProductScreen} />
      </Stack.Navigator>
     
    </NavigationContainer>
    </Provider>
  );
  }

