// app/home.tsx
import { Text, View, StyleSheet } from "react-native";
import { Stack } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "EduCoChain Home" }} /> 
      {/* <Text style={styles.title}>Carteira Conectada com Sucesso!</Text> */}
      <Text style={styles.subtitle}>Bem-vindo ao EduCoChain.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: '#f2eee2', // Um fundo suave para a Home
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
    color: '#28a745', // Cor verde para sucesso
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 20,
    color: '#333',
  },
});