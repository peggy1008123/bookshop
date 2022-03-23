import React from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";
import AlbumDetail from "./AlbumDetail";

const AlbumList = ({ list, navigation }) => {
  const renderItem = ({ item }) => <AlbumDetail album={item} navigation={navigation} />;
  return (
    <View>
      <FlatList 
      data={list}
      renderItem={renderItem}
      keyExtractor={item => item.title}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.content}
      />  
    </View>  
  );  
}
const styles = StyleSheet.create({
  content:{
    paddingLeft: 20,
  },
});
export default AlbumList;

