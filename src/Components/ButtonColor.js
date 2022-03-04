import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'

const ButtonColor = ({corFundo, funcInc, funcDec}) => {
    return (
        <View style={styles.row}>
            <TouchableOpacity 
                style={[styles.botão, styles.botãoEsquerdo, {backgroundColor:corFundo}]}
                onPress={() => funcDec()}>
                <Text style={styles.textoBotão}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.botão, styles.botãoDireito, {backgroundColor:corFundo}]}
                onPress={() => funcInc()}>
                <Text style={styles.textoBotão}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    row:{
        flex: 1,
        flexDirection: "row",
    },
    textoBotão:{
        color: "white",
        fontSize: 30,
    },
    botão:{
        marginVertical:10,
        height: 40,
        width: "40%",
        ///backgroundColor:"#0088ff",
        justifyContent: "center",
        
    },
    botãoEsquerdo:{
        borderBottomStartRadius: 90,
        borderTopStartRadius: 90,
        paddingHorizontal: 20,
        alignItems: "flex-start"
    },
    botãoDireito:{
        borderBottomEndRadius: 90,
        borderTopEndRadius: 90,
        paddingHorizontal: 20,
        alignItems: "flex-end"
    }

})

export default ButtonColor;
