import React from 'react';
import { Text, StyleSheet, View, Image} from 'react-native';

const Card = ({imagem, nome, ponto}) => {
    return (
        
        <View style={styles.container}>
            <Image style={styles.foto}  source={imagem}/>
            
            <View style={styles.coluna}>
                <Text style={styles.texto} >{nome}</Text>
                <Text style={styles.texto2}>Pontuação: {ponto}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        height: 100,
        marginVertical:20
    },
    coluna: {
        flexDirection: "column",
    },
    foto: {
        marginHorizontal:15,
        borderRadius:90,
        width: 100,
        aspectRatio:1,
        backgroundColor: "red"
    },
    texto: {
        fontSize: 25,
        color: "black"
    },
    texto2: {
        fontSize: 17,
        color: "grey"
    }
})

export default Card;