import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const Rating = ({data}) => {
    const RatingGroup = ()=> {
        const ratingGroup = [];
        for(let i=0; i<5; i++) {
            if(i<data){
                ratingGroup.push(
                    <Image source={require('../../assets/icon/icon_star_filled.png')} style={styles.rating} key={i}/>
                );
            }else{
                ratingGroup.push(
                    <Image source={require('../../assets/icon/icon_star_empty.png')} style={styles.rating} key={i}/>
                );
            }
        }
        return ratingGroup;
    }

    return (
        <View style={styles.ratingWapper}>
            <RatingGroup/>
        </View>
    );
}

export default Rating;

const styles = StyleSheet.create({
    ratingWapper: {
        marginTop: 16,
        marginBottom: 0,
        flexDirection: 'row',
    },
    rating: {
        width: 14,
        height: 14,
        marginRight: 4,
    }
});