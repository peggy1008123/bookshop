import React from 'react';
import { StyleSheet, ScrollView, Text, View, Image, Linking, Pressable } from 'react-native';

const MyBooks = ({ route }) => {
  
  return (
    <View style={styles.container}>
        <Text>My Books</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MyBooks;
