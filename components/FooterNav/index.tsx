import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const FooterNav = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/images/EduCoChain-logo.png')}
                style={styles.logo}
            />
            <Text style={styles.text}>FooterNav</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 30,
        width: '100%',
        height: '13%',
        alignItems: 'center',
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

export default FooterNav;