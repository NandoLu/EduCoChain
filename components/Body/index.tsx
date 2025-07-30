import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const Body = () => {
    return (
        <View style={styles.container}>
            <View style={styles.connectedStatus}>
                <Text style={styles.text}>Bem-vindo ao EduCoChain!</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        padding: 30,
        flexDirection: 'row',
        backgroundColor: '#f9f5ebff',
    },
    connectedStatus: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        color: '#5d1923',
        fontSize: 17,
        fontWeight: 'bold',
    },
});

export default Body;