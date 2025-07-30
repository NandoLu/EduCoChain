import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/images/EduCoChain-logo.png')}
                style={styles.logo}
            />
            <View style={styles.connectedStatus}>
                <Text style={styles.text}>Conectado</Text>
                <View style={styles.greenDot} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        padding: 20,
        width: '100%',
        height: '15%',
        alignItems: 'center',
        paddingHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f2eee2', 
    },
    logo: {
        height: 50,
        width: 100,
        resizeMode: 'contain',
    },
    connectedStatus: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    greenDot: {
        width: 10,  // Tamanho da bolinha
        height: 10,
        borderRadius: 5, 
        backgroundColor: '#28a745', 
        marginLeft: 10, 
    },
    text: {
        color: '#5d1923',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Header;