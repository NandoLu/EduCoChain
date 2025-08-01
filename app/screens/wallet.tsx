import { Text, View, StyleSheet } from "react-native";
import Header from '../../components/Header';
import FooterNav from '../../components/FooterNav';
import SearchCont from '../../components/SearchCont';
import { Stack } from "expo-router";

export default function Wallet() {
  return (
    <View style={styles.container}>
      <Header />
      <Stack.Screen options={{ title: "Wallet" }} />

      {/* CONTEUDO PRINCIPAL  */}

      <View style={styles.body}>
        <Text style={styles.text}>Sua Carteira</Text>
        <SearchCont />
      </View>

      <FooterNav></FooterNav>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
  body: {
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