import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import AlbumList from "../components/AlbumList";
import albumData from "../json/albums.json";

const AlbumScreen = ({ navigation }) => {
  return (
    <ScrollView style={{flex: 1, 
      backgroundColor: '#fff',}}>
      <Text style={styles.h1}>Popular Books</Text>
      <AlbumList 
        list={albumData.popularbooks}
        navigation={navigation}
      />
      <Text style={styles.h1}>Newest</Text>
      <AlbumList 
        list={albumData.newestbooks}
        navigation={navigation}
      />
    </ScrollView>
    
  );
};
const styles = StyleSheet.create({
  h1:{
    fontSize: 24,
    fontWeight: '500',
    marginLeft: 20,
    marginTop: 16,
    marginBottom: 16,
  }
})
export default AlbumScreen;
