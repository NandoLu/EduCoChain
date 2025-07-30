import { Text, View, Image, StyleSheet } from "react-native";
import { Link, router } from "expo-router";
import AppButton from '../components/AppButton';
import StepsContainer from '../components/StepsContainer';
import React, { useState } from 'react';

export default function Index() {
  const [isWalletConnected, setIsWalletConnected] = useState(false); 
  const [isConnecting, setIsConnecting] = useState(false);

  const handleConnectWallet = async () => {
    setIsConnecting(true);
    setIsWalletConnected(true);
    setIsConnecting(false);
    router.replace('/home'); // Exemplo se você tivesse importado `useRouter`
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/EduCoChain-logo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Bem-vindo ao EduCoChain!</Text>

      <AppButton
        title="Conectar Carteira"
        onPress={handleConnectWallet}
        disabled={true} // Desabilitado
        loading={isConnecting} // Mostra spinner se estiver conectando
      />

      <StepsContainer />

      <Link href="/home" asChild>
        <AppButton 
          title="Ir para Home (teste)" 
          onPress={() => {}}
        />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: '#f2eee2',
  },
  logo: {
    height: 150,
    resizeMode: 'contain',
    // borderWidth: 1
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: 'center',
    color: '#5d1923',
    marginVertical: 10,
  },
});