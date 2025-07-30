import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Header = ({ }) => {
    return (
        <View style={styles.container}>

            <Image
                source={require('../../assets/images/EduCoChain-logo.png')}
                style={styles.logo}
            />

            <Text style={styles.text}>Tela Home</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        width: '100%',
        height: '13%',
        alignItems: 'center',
        backgroundColor: '#f3ebd2ff',
        gap: 20,
        flexDirection: 'row',
    },
    logo: {
        height: 50,
        width: 100,
    },
    text: {
        color: '#5d1923', // Cor do texto padrão
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Header;