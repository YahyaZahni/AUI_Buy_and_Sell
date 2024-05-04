import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './APP/Pages/Login'; // Adjust the path as necessary
import Signup from './APP/Pages/Signup'; // Adjust the path as necessary
import Passewordforgot from './APP/Pages/Passewordforgot'; // Adjust the path and correct the file name if necessary
import HomeScreen from './APP/Pages/HomeScreen';
import Post from './APP/Pages/Post'
import AddPost from './APP/Pages/AddPost';
import Currents from './APP/Pages/Currents';
import Profil from './APP/Pages/Profil';
import Admin from './APP/Pages/Admin';
 // Adjust the path as needed
const Stack = createNativeStackNavigator();


export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen name="HomeScreen" component={HomeScreen}           options={{ headerShown: false }}
 />
                 <Stack.Screen
          name="Currents"
          component={Currents}
          options={{ headerShown: false }}
        />

        <Stack.Screen name="AddPost" component={AddPost} />
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
        <Stack.Screen name="Profil" component={Profil} />
        <Stack.Screen name="Admin" component={Admin} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
