import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './APP/Pages/Login';
import Passewordforgot from './APP/Pages/Passewordforgot';

export default function App() {
  return (
    <View style={styles.container}>
     <Passewordforgot/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
