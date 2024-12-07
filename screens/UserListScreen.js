import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const UserListScreen = ({ navigation }) => {
  const [users, setUsers] = useState([]); 
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]); 

  const fetchUsers = async () => {
  try {
    const response = await axios.get('https://randomuser.me/api/?results=20');
    const newUsers = response.data.results.map((user) => ({
      name: user.name,
      email: user.email,
      dob: user.dob,
    }));

    const storedUsers = JSON.parse(await AsyncStorage.getItem('users')) || [];

    const uniqueUsers = newUsers.filter(
      (user) => !storedUsers.some((stored) => stored.email === user.email)
    );

    // Keep only the latest 100 users
    const updatedUsers = [...uniqueUsers, ...storedUsers].slice(0, 10);

    await AsyncStorage.setItem('users', JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
    setFilteredUsers(updatedUsers);
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

  

  // Search function to filter users by name or email
//   const handleSearch = (query) => {
//     setSearchQuery(query);

//     // Convert query to lowercase for case-insensitive matching
//     const lowerQuery = query.toLowerCase();

//     // Filter users based on query
//     const filtered = users.filter(
//       (user) =>
//         user.name.first.toLowerCase().includes(lowerQuery) ||
//         user.name.last.toLowerCase().includes(lowerQuery) ||
//         user.email.toLowerCase().includes(lowerQuery)
//     );

//     // Update filtered users
//     setFilteredUsers(filtered);
//   };

  // UseEffect to fetch data and set interval
  useEffect(() => {
    // const interval = setInterval(fetchUsers, 20000); // Fetch users every 20 seconds
    fetchUsers(); // Initial fetch
    // return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <View style={styles.container}>
      {/* Search Input */}
      {/* <TextInput
        style={styles.searchBar}
        placeholder="Search by name or email"
        value={searchQuery}
        onChangeText={handleSearch}
      /> */}

      {/* User List */}
      <FlatList
        data={filteredUsers} // Display filtered users
        keyExtractor={(item) => item.email}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('UserDetail', { user: item })}
          >
            <Text style={styles.item}>
              {`${item.name.first} ${item.name.last}, Age: ${item.dob.age}`}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  item: { fontSize: 16, padding: 10, borderBottomWidth: 1, borderColor: '#ccc' },
});

export default UserListScreen;
