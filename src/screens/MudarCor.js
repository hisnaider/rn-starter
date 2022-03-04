import React, {useState, useReducer} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ButtonColor from '../Components/ButtonColor';

const reducer = (state,action) => {
    switch (action.colorToChange){
        case "r":
            return state.r+action.amount <= 255 && state.r+action.amount >= 0 
                ? {...state, r: state.r+action.amount}
                : state;
        case "g":
            return state.g+action.amount <= 255 && state.g+action.amount >= 0 
                ? {...state, g: state.g+action.amount}
                : state;
        case "b":
            return state.b+action.amount <= 255 && state.b+action.amount >= 0 
                ? {...state, b: state.b+action.amount}
                : state;
    }
}

const MudarCor = () => {
    let COR_INCREMENT = 15;
    const [state, dispatch] = useReducer(reducer, {r:0,g:0,b:0})
    return (
        <View style={{flex:1,flexDirection:"column"}}>
            <View style={[styles.cor, {backgroundColor:`rgb(${state.r},${state.g},${state.b})`}]}></View>
            <View style={styles.opções}>
                <View style={styles.row}>
                    <Text style={styles.texto}>R: {state.r}</Text>
                    <Text style={styles.texto}>G: {state.g}</Text>
                    <Text style={styles.texto}>B: {state.b}</Text>
                </View>
                <ButtonColor 
                    corFundo="rgb(255,100,100)"
                    funcInc={() => dispatch({colorToChange: "r", amount:COR_INCREMENT})} 
                    funcDec={() => dispatch({colorToChange: "r", amount:-COR_INCREMENT})} 
                />
                <ButtonColor 
                    corFundo="rgb(100,255,100)"
                    funcInc={() => dispatch({colorToChange: "g", amount:COR_INCREMENT})} 
                    funcDec={() => dispatch({colorToChange: "g", amount:-COR_INCREMENT})} 
                />
                <ButtonColor 
                    corFundo="rgb(100,100,255)" 
                    funcInc={() => dispatch({colorToChange: "b", amount:COR_INCREMENT})} 
                    funcDec={() => dispatch({colorToChange: "b", amount:-COR_INCREMENT})} 
                />
            </View>
            
        </View>
    )
}

/*const MudarCor = () => {
    const [cor, setCor] = useState({r:0,g:0,b:0})
    const novaCor = (corRGB,valor) => {
        switch (corRGB) {
            case 'r':
                cor.r+valor <= 255 && cor.r+valor >= 0
                    ? setCor({r:cor.r+valor, g:cor.g, b:cor.b})
                    : null
                return;
            case "g":
                cor.g+valor <= 255 && cor.g+valor >= 0
                    ? setCor({r:cor.r, g:cor.g+valor, b:cor.b})
                    : null
                return;
            case "b":
                cor.b+valor <= 255 && cor.b+valor >= 0
                    ? setCor({r:cor.r, g:cor.g, b:cor.b+valor})
                    : null
                return;
        }
    }
    return (
        <View style={{flex:1,flexDirection:"column"}}>
            <View style={[styles.cor, {backgroundColor:`rgb(${cor.r},${cor.g},${cor.b})`}]}></View>
            <View style={styles.opções}>
                <View style={styles.row}>
                    <Text style={styles.texto}>R: {cor.r}</Text>
                    <Text style={styles.texto}>G: {cor.g}</Text>
                    <Text style={styles.texto}>B: {cor.b}</Text>
                </View>
                <ButtonColor 
                    corFundo="rgb(255,100,100)"
                    funcInc={() => novaCor("r", 15)} 
                    funcDec={() => novaCor("r", -15)}
                />
                <ButtonColor 
                    corFundo="rgb(100,255,100)"
                    funcInc={() => novaCor("g", 15)} 
                    funcDec={() => novaCor("g", -15)}
                />
                <ButtonColor 
                    corFundo="rgb(100,100,255)" 
                    funcInc={() => novaCor("b", 15)} 
                    funcDec={() => novaCor("b", -15)}
                />
            </View>
            
        </View>
    )
}*/

const styles = StyleSheet.create({
    cor:{
        flex: 1,
        width:"100%",
    },
    opções:{
        flexDirection: 'column',
        height:300,
        width:"100%",
        alignItems: "center",
        justifyContent: 'center'
    },
    row:{
        flex: 1,
        flexDirection: "row",
    },
    texto:{
        flex: 1,
        color: "black",
        fontSize: 30,
        alignSelf: "center",
        textAlign:"center"
    },
   
})

export default MudarCor;

