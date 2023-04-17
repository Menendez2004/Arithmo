import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeScreen } from './src/components/views/Home/Home';
import { RegisterScreen } from './src/components/views/register/Register';

export type RootStackParamList = {
  HomeScreen: undefined,
  RegisterScreen: undefined
  
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen 
        name="RegisterScreen" 
        component={RegisterScreen} 
        options={{
          headerShown: true,
          title: "Registrate"
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;