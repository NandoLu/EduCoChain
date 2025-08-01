import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Link, router } from "expo-router";

const FooterNav = () => {
    return (
        <View style={styles.container}>
            <Link href={"/screens/wallet"} asChild>
                <TouchableOpacity style={styles.buttonFooter} >
                    <Image
                        source={require('../../assets/images/EduCoChain-logo.png')}
                        style={styles.icon}
                    />
                    <Text style={styles.text}>Carteira</Text>
                </TouchableOpacity>
            </Link>

            <Link href={"/home"} asChild>
                <TouchableOpacity style={styles.buttonFooter} >
                    <Image
                        source={require('../../assets/images/EduCoChain-logo.png')}
                        style={styles.icon}
                    />
                    <Text style={styles.text}>Inicio</Text>
                </TouchableOpacity>
            </Link>

            <Link href={"/screens/contracts"} asChild>
                <TouchableOpacity style={styles.buttonFooter} >
                    <Image
                        source={require('../../assets/images/EduCoChain-logo.png')}
                        style={styles.icon}
                    />
                    <Text style={styles.text}>Contratos</Text>
                </TouchableOpacity>
            </Link>

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