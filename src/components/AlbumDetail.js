import React from "react";
import { Box, HStack, VStack, AspectRatio,Pressable } from "native-base"
import { StyleSheet, Text, View, Image, } from "react-native";
import albumdata from "../json/albums.json"
import Rating from './Rating';


const AlbumDetail = ({ album, navigation }) => {
  return (
    <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, 
                      styles.cardSectionStyle]}>
          <Pressable 
          onPress={() => navigation.navigate('Detail', album)}
        >
          {
            album.rating != null
            ?(
            <>
            <Image
              source={{uri: album.image}}
              style={styles.imageStyle}
              alt="album"
            />   
            <Rating data={album.rating}/>   
            <Text style={styles.h2}>{album.title}</Text>
            <Text style={[styles.b2, styles.gray]}>{album.author}</Text>
            </>
            ):(
              <>
            <Image
              source={{uri: album.image}}
              style={styles.imageStyle}
              alt="album"
            />      
            <Text style={styles.h2}>{album.title}</Text>
            <Text style={[styles.b2, styles.gray]}>{album.author}</Text>
            </>
            )
          }      
        </Pressable>
        </View>
      </View>
  )};
  const styles = StyleSheet.create({
    thumbnailContainerStyle: {
      flexDirection: "row",
      justifyContent: "flex-start",
      marginRight: 16
    },
    imageStyle: {
      width: 140,
      height: 200
    },
    h2:{
      fontSize: 14,
      lineHeight: 18,
      fontWeight: '500',
      letterSpacing: 0.012,
      marginTop: 10,
      marginBottom: 8,
    },
    b2:{
      fontSize: 10,
      lineHeight: 10,
      fontWeight: '400',
      },
    gray:{
      color: '#666666',
    }
  })
export default AlbumDetail;
