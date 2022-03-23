import React from 'react';
import { StyleSheet, ScrollView, Text, View, Image, Linking, Pressable } from 'react-native';

const WishList = ({ route }) => {
  
  return (
    <View style={styles.container}>
        <Text>WishList</Text>
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

export default WishList;
