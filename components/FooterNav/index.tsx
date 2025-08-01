import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

const FooterNav = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.buttonFooter}
                onPress={() => router.replace("/screens/wallet")}
            >
                <Image
                    source={require('../../assets/images/EduCoChain-logo.png')}
                    style={styles.icon}
                />
                <Text style={styles.text}>Carteira</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonFooter}
                onPress={() => router.replace("/home")}
            >
                <Image
                    source={require('../../assets/images/EduCoChain-logo.png')}
                    style={styles.icon}
                />
                <Text style={styles.text}>Inicio</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonFooter}
                onPress={() => router.replace("/screens/contracts")}
            >
                <Image
                    source={require('../../assets/images/EduCoChain-logo.png')}
                    style={styles.icon}
                />
                <Text style={styles.text}>Contratos</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingBottom: 10,
        paddingHorizontal: 20,
        width: '100%',
        height: '14%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f2eee2',
    },
    buttonFooter: {
        alignItems: 'center',
        borderRadius: 15,
        padding: 5,
        width: '28%',
        backgroundColor: '#ffffffff',
    },
    icon: {
        height: 50,
        width: 50,
    },
    text: {
        color: '#5d1923',
        fontSize: 15,
        fontWeight: 'bold',
    },
});

export default FooterNav;