import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
    const pessoas = [
        {nome: "Pessoa 1", idade: "20"},
        {nome: "Pessoa 2", idade: "45"},
        {nome: "Pessoa 3", idade: "32"},
        {nome: "Pessoa 4", idade: "27"},
        {nome: "Pessoa 5", idade: "53"},
        {nome: "Pessoa 6", idade: "30"},
        {nome: "Pessoa 7", idade: "60"},
        {nome: "Pessoa 8", idade: "25"},
        {nome: "Pessoa 9", idade: "31"},

    ]
    return (
        <FlatList 
            ///horizontal={true}
            ///showsHorizontalScrollIndicator={false}
            keyExtractor={pessoas => pessoas.nome+"chave"}
            data={pessoas}
            renderItem={({item}) => {
                return (
                    <View style={style_sheet.container}>
                        <Text style={style_sheet.texto}>Nome: {item.nome} - Idade: {item.idade}</Text>
                    </View>
                    
                )
            }}    
            />
    )
}

const style_sheet = StyleSheet.create({
    texto:{
        fontSize:20,
        color: 'black'
    },
    container:{
        marginVertical:5,
        paddingVertical:30,
        alignItems: 'center',
        height:100,
        width: "100%",
        backgroundColor: "#00b3ff"
    }

})

export default ListScreen;