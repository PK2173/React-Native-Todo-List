import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Todolistscreen from './screen/Todolistscreen';

export default function App() {
  return (
    <SafeAreaView>
      <Todolistscreen/>
    </SafeAreaView>
  );
}
