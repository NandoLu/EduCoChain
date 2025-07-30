import { Text, View, Image, StyleSheet } from "react-native";
import { Link, router } from "expo-router";
import AppButton from '../components/AppButton';
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

      <View style={styles.stepsContainer}>
        <Text style={styles.stepsTitle}>Como conectar sua carteira:</Text>
        <Text style={styles.step}>1. Instale um aplicativo de carteira (Ex: MetaMask).</Text>
        <Text style={styles.step}>2. Abra o aplicativo e crie ou importe uma carteira.</Text>
        <Text style={styles.step}>3. Volte aqui e clique em "Conectar Carteira".</Text>
        <Text style={styles.step}>4. Confirme a conexão na sua carteira.</Text>

        <AppButton
          title="Conectar Carteira"
          onPress={handleConnectWallet}
          disabled={true} // Desabilitado
          loading={isConnecting} // Mostra spinner se estiver conectando
        />
      </View>

      <Link href="/home" asChild>
        <AppButton
          title="Ir para Home"
          onPress={() => { }}
        />
      </Link>
      
      <View style={styles.aboutContainer} >
        <Text style={styles.step} >Desenvolvido por EduCoChain</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingTop: '14%',
    backgroundColor: '#f2eee2',
  },
  logo: {
    height: 150,
    resizeMode: 'contain',
    // borderWidth: 1
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: 'center',
    color: '#5d1923',
    marginTop: 25,
  },
  // STEPS 
  stepsContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '90%',
    elevation: 2,
    marginVertical: 30,
  },
  stepsTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 15,
    textAlign: 'center',
    color: '#333',
  },
  step: {
    fontSize: 14,
    marginBottom: 10,
    color: '#555',
  },
  about: {
    fontSize: 14,
    marginBottom: 10,
    color: '#555',
  },
  aboutContainer: {
    marginTop: '20%',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#f2eee2', // Um fundo suave para a Home
  },
});