import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link, Stack,Tabs } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Text>this is new post page</Text>
      <StatusBar style="auto" />
      <Link href={{ pathname: '/board' }}>Go to Index</Link>
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