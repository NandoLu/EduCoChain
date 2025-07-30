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
        paddingBottom: 20,
        width: '100%',
        height: '13%',
        alignItems: 'center',
        paddingHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f2eee2',
        // --- Sombra para iOS ---
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        // --- Estilo de elevação para Android ---
        elevation: 2,
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
        width: 13,  // Tamanho da bolinha
        height: 13,
        borderRadius: 10,
        backgroundColor: '#28a745',
        marginLeft: 15,
    },
    text: {
        color: '#5d1923',
        fontSize: 17,
        fontWeight: 'bold',
    },
});

export default Header;