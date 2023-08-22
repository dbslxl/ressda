import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source='/assets/plastic.jpg' style={styles.image} />
      
      <View style={styles.photoContainer}>
        <Button title='Choose a photo'/>
        <Button title='Use this Photo'/>
      </View>
      <StatusBar style="auto" />
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
  image: {
    width: 300,
    height: 600,
    borderRadius: 18,
    marginBottom:30
  },
  photoContainer:{
    gap:10,
    margin:10
  }
});