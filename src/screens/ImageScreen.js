import React from 'react';
import { Text, StyleSheet, FlatList} from 'react-native';
import Card from "../Components/Card"

const ImageScreen = () => {
    const lista = [
        {nome: "Floresta", imagem: {uri: "https://wribrasil.org.br/sites/default/files/styles/large/public/floresta-perda-cobertura-florestal.jpg?itok=7TTjqQNg"}, ponto: 5},
        {nome: "Deserto", imagem: {uri:"https://super.abril.com.br/wp-content/uploads/2017/03/o-deserto-do-saara-c3a9-culpa-do-ser-humano.jpg?quality=90&strip=info&w=1024"}, ponto: 2},
        {nome: "Tundra Artica", imagem: {uri:"https://www.infoescola.com/wp-content/uploads/2016/01/tundra-alasca-392296921.jpg"}, ponto: 6},
        {nome: "Praia", imagem: require("../../assets/Images/beach.jpg"), ponto: 9},
        {nome: "Montanha", imagem: require("../../assets/Images/mountain.jpg"), ponto: 4},
        {nome: "Floresta 2", imagem: require("../../assets/Images/forest.jpg"), ponto: 7},
    ]
    return(
        <FlatList
            data={lista}
            keyExtractor={lista => lista.nome+"-chave"}
            renderItem={({item}) => {
                return <Card nome={item.nome} imagem={item.imagem} ponto={item.ponto}/>
            }}

        />
        /*<View>
            <Card nome="Floresta" imagem="https://wribrasil.org.br/sites/default/files/styles/large/public/floresta-perda-cobertura-florestal.jpg?itok=7TTjqQNg"/>
            <Card nome="Deserto" imagem="https://super.abril.com.br/wp-content/uploads/2017/03/o-deserto-do-saara-c3a9-culpa-do-ser-humano.jpg?quality=90&strip=info&w=1024"/>
            <Card nome="Tundra Artica" imagem="https://www.infoescola.com/wp-content/uploads/2016/01/tundra-alasca-392296921.jpg"/>
        </View>*/
        
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        height: 100,
        marginVertical:10
    },
    foto: {
        marginHorizontal:15,
        borderRadius:90,
        height: "100%",
        aspectRatio:1,
    },
    texto: {
        fontSize: 30,
    }
})

export default ImageScreen