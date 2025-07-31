import React from 'react';
import { View, Image, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const SearchCont = () => {
    return (
        <View style={styles.container}>
            <View style={styles.searchSection}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Pesquisar contrato..."
                    placeholderTextColor="#888"
                />
                <TouchableOpacity style={styles.searchButton}>
                    <Image
                        source={require('../../assets/images/search.png')}
                        style={styles.logo}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    text: {
        color: '#5d1923',
        fontSize: 17,
        fontWeight: 'bold',
    },
    searchSection: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginTop: 10,
    },
    searchInput: {
        flex: 1,
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginRight: 5,
        fontSize: 15,
        color: '#333',
    },
    searchButton: {
        backgroundColor: '#5d1923',
        padding: 10,
        height: 50,
        width: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        height: 30,
        width: 30,
        resizeMode: 'contain',
    },
});

export default SearchCont;
