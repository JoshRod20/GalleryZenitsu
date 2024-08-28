import { Text, View, Image, StyleSheet } from 'react-native'; 
import React from 'react';

function Zenitsu(props) {
    return (
        <View style={styles.container}>
        <Image style={styles.zenitsu} source={props.image} />
        <Text style={styles.title}>{props.name}</Text>
        </View>
    );
}

export default Zenitsu;

const styles = StyleSheet.create({
container: {
    alignItems: 'center', // Centra todo el contenido dentro del View
    marginVertical: 20,
},
    zenitsu: {
        width: 350,
        height: 500,
        borderRadius: 10,
        marginBottom: 10,  // Espacio entre la imagen y el texto
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },
    });
