import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './APP/Pages/Login'; // Adjust the path as necessary
import Signup from './APP/Pages/Signup'; // Adjust the path as necessary
import Passewordforgot from './APP/Pages/Passewordforgot'; // Adjust the path and correct the file name if necessary

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Signup" 
          component={Signup} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Passewordforgot" 
          component={Passewordforgot} // Make sure to export this component correctly in its file
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
