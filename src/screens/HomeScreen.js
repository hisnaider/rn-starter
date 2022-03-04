import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Components')}
        style={styles.botão}>
          <Text style={styles.text}>Ir para 'ComponentScreen'</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('List')}
        style={styles.botão}>
          <Text style={styles.text}>Ir para 'ListScreen'</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Imagem')}
        style={styles.botão}>
          <Text style={styles.text}>Ir para 'ImageScreen'</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Contador')}
        style={styles.botão}>
          <Text style={styles.text}>Ir para 'CounterScreen'</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Cores')}
        style={styles.botão}>
          <Text style={styles.text}>Ir para 'ColorScreen'</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('MudarCores')}
        style={styles.botão}>
          <Text style={styles.text}>Ir para 'ChangeColorScreen'</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('TextInput')}
        style={styles.botão}>
          <Text style={styles.text}>Ir para 'TextInputScreen'</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Box')}
        style={styles.botão}>
          <Text style={styles.text}>Ir para 'BoxScreen'</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    color:"white",  
  },
  botão: {
    display: 'flex',
    justifyContent: 'center',
    marginVertical:20,
    marginHorizontal:40,
    alignItems:"center",
    height: 50,
    borderRadius: 30,
    backgroundColor: "#0088ff"
  }
});

export default HomeScreen;
