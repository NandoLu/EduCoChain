import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchCont from '../SearchCont';

const Body = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>Bem-vindo ao EduCoChain!</Text>
            </View>
            <SearchCont />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
        flexDirection: 'column',
    },
    text: {
        color: '#5d1923',
        fontSize: 17,
        fontWeight: 'bold',
    },
});

export default Body;