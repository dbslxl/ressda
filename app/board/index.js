import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link, Stack, Tabs } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Text>Open up board/index.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Link href={{ pathname: 'board/new' }}>Go to New post page</Link>
      <Link href={{ pathname: 'board/testslug1234' }}>Go to test1234 post page</Link>
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