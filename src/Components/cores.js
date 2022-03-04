import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

const Cores = ({r,g,b}) => {
    return (
        <View style={styles.row}>
            <View style={[
                {backgroundColor: `rgb(${r},${g},${b})`},
                styles.cor
            ]}/>
            <View style={{flexDirection:"column"}}>
                <Text style={styles.texto}>R: {r}</Text>
                <Text style={styles.texto}>G: {g}</Text>
                <Text style={styles.texto}>B: {b}</Text>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical:20
    },
    cor:{
        height: 100,
        width: 100,
        borderRadius:90
    },
    texto:{
        fontSize:20, 
        color: "black", 
        marginHorizontal:20
    }
})

export default Cores;