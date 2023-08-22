import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link, Stack,Tabs } from 'expo-router';
import { useLocalSearchParams } from 'expo-router';

export default function App() {
  const { slug } = useLocalSearchParams();
  return (
    <View style={styles.container}>
      
      <Text>This is post #{slug} page</Text>
      <StatusBar style="auto" />
      <Link href={{ pathname: '/board/new' }}>Go to new post page</Link>
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