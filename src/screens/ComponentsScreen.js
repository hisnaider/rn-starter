import React from 'react';
import {Text, StyleSheet, View} from 'react-native';


const ComponentsScreen = () => {
    const teste = "Legal"
            

    return (
        <View>
            <Text style={styles.textStyle}>Começando com React Native</Text>
            <Text style={styles.textStyle2}>Meu nome é {teste}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45,
        color: "black"
    },
    textStyle2: {
        fontSize: 20,
        color: "black"
    },

})

export default ComponentsScreen