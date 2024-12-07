import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const StartScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="Start" onPress={() => navigation.navigate('UserList')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default StartScreen;
