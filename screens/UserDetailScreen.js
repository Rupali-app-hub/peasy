import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserDetailScreen = ({ route }) => {
  const { user } = route.params;
  console.log(user, "user===>")
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Name: {`${user.name.title} ${user.name.first} ${user.name.last}`}</Text>
      <Text style={styles.text}>Email: {user.email}</Text>
      <Text style={styles.text}>Age: {user.dob.age}</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  text: { fontSize: 16, marginBottom: 10 },
});

export default UserDetailScreen;
