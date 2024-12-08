import React from 'react';
import { View, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';

const StartScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="Start" onPress={() => navigation.navigate('UserList')} />
      <TouchableOpacity onPress={()=>{navigation.navigate('UserList')}}>
      <Text style={styles.textContainer}>
        Access user list
      </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  textContainer:{color:"blue",  textDecorationLine: "underline", marginTop:10}
});

export default StartScreen;
