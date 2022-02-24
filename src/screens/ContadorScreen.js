import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from "react-native";

const ContadorScreen = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.botão}>
                <Text style={styles.texto}>Aumentar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botão}>
                <Text style={styles.texto}>Diminuir</Text>
            </TouchableOpacity>
            <View style={{height:50}}></View>
            <Text style={styles.texto2}>Contador atual</Text>
            <View style={{height:25}}></View>
            <Text style={styles.contador}>0</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        marginVertical:50,
        alignItems: 'center',
    },
    botão:{
        backgroundColor:"#0088ff",
        alignItems: "center",
        justifyContent: "center",
        width:200,
        paddingVertical: 20,
        marginVertical: 10,
        borderRadius: 90
    },
    texto:{
        fontSize:25,
        color:"white"
    },
    texto2:{
        fontSize:25,
        color:"black"
    },
    contador:{
        fontSize:40,
        color:"black"
    }
})
export default ContadorScreen;