import React, {useState} from "react";
import {View , Text, TextInput, StyleSheet} from "react-native";

const TextInputSceen = () => {
    const [nome,setNome] = useState("")
    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                placeholder="Digite uma senha"
                value={nome}
                onChangeText={(value) => setNome(value)}
            />
            {nome.length > 5 
                ? <Text style={[styles.texto, {color: 'green'}]}>Senha valida</Text>
                : <Text style={[styles.texto, {color: 'red'}]}>A senha deve conter mais de 5 caracteres</Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        margin: 20,
    },
    row:{
        flexDirection:"row",
        alignItems: "center",
        justifyContent: "center",
    },
    input:{
        paddingHorizontal:20,
        paddingVertical:10,
        borderColor:"#a6a6a6",
        borderWidth:1,
        borderRadius:30,
        fontSize:20
        
    },
    texto:{
        fontSize:17,
    }
})

export default TextInputSceen;