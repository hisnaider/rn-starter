import React, {useState, useRef} from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Cores from '../Components/cores'

const novacor = () => {
    const a = Math.floor(Math.random()*255)+1;
    return a
}


const ColorScreen = () => {
    const [cor, setCor] = useState([]);
    const teste = useRef();

    
    return (
        <View style={{marginHorizontal: 20, height:"100%"}}>
            <TouchableOpacity
                keyExtractor={cor => cor.id}
                style={styles.botão} 
                onPress={() => {
                    setCor([...cor, {r:novacor(),g:novacor(),b:novacor()}])}}>
                <Text style={{fontSize:25, color: 'white'}}>Aperta aqui carai!</Text>
            </TouchableOpacity>
            <FlatList
                ref={teste}
                keyExtractor={cor => cor.id}
                data={cor}
                renderItem={({item}) => {
                    teste.current.scrollToEnd({animated: true});
                    return (
                        <Cores r={item.r} g={item.g} b={item.b}/>
                )
                }}

            />
        </View>
    );

}

const styles = StyleSheet.create({
    botão:{
        backgroundColor:"#0088ff",
        alignItems: "center",
        justifyContent: "center",
        width:"100%",
        paddingVertical: 20,
        marginVertical: 10,
        borderRadius: 90
    },
})

export default ColorScreen;