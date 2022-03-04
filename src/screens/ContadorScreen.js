import React, {useReducer} from 'react';
import {Text, View, StyleSheet} from "react-native";
import ButtonColor from "../Components/ButtonColor"

const reducer = (state, action) => {
    return state+action
}

const ContadorScreen = () => {
    const [state, dispatch] = useReducer(reducer, 0)
    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <Text style={styles.texto}>Contador atual</Text>
                <View style={{flexDirection:"row", alignItems: "center"}}>
                    <Text style={[styles.texto, {color:"#a6a6a6"}]}>{state-1}</Text>
                    <Text style={styles.contador}>{state}</Text>
                    <Text style={[styles.texto, {color:"#a6a6a6"}]}>{state+1}</Text>
                </View>
                
            </View>
            <View style={styles.botão}>
                <ButtonColor
                    corFundo="#0088ff" 
                    funcInc={() => dispatch(1)} 
                    funcDec={() => dispatch(-1)} 
                />
            </View>
            
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    container2:{
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: 'center',
        flex: 5
        
        
    },
    texto:{
        fontSize:25,
        color:"black",
        marginHorizontal:50
    },
    contador:{
        fontSize:100,
        color:"black",
    },
    botão:{
        alignItems: "center",
        width:"100%",
        flex: 1,
    }

})
export default ContadorScreen;