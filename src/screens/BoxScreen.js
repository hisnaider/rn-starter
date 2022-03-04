import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const BoxScreen = () => {
    return (
        <View>
            <View style={styles.box1}></View>
            <View style={styles.box2}></View>
            <View style={styles.box3b}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    box1:{
        height: 100,
        width: 100,
        backgroundColor: 'red'
    },
    box2:{
        position: 'absolute',
        height: 100,
        width: 100,
        backgroundColor: 'blue',
        right: 0
    
    },
    box3a:{
        height: 100,
        width: 100,
        backgroundColor: 'green',
        alignSelf: 'center',
    },
    box3b:{
        position: 'absolute',
        height: 100,
        width: 100,
        backgroundColor: 'green',
        alignSelf:"center",
        top: 100
    },
})

export default BoxScreen;